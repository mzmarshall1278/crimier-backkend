import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { CreateUserCredentialsDto } from './dto/create-user-credentials.dto';
import { loginCredentialsDto } from './dto/login-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) 
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) { }
  
  async addUser(authDto: CreateUserCredentialsDto):Promise<void>{
    return this.userRepository.addUser(authDto);
  }
  
  async login(authDto: loginCredentialsDto): Promise<{ accessToken: string }> {
    const user = await this.userRepository.validatePassword(authDto);
    if (!user.username) return;

    const payload: JwtPayload = { username: user.username, district: user.district };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  };

  getAllDistricts(username: string, district: string):Promise<User[]> {
    return this.userRepository.getAllDistricts(username, district);
  }

}
