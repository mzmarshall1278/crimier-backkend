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

  async addUser(authDto: CreateUserCredentialsDto, user: User):Promise<void>{
    return this.userRepository.addUser(authDto, user);
  };

  async login(authDto: loginCredentialsDto): Promise<{ accessToken: string, user: {} }> {
    const user = await this.userRepository.validatePassword(authDto);
    if (!user.username) return;

    const payload: JwtPayload = { username: user.username, district: user.district };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken, user: user.username };
  };

  async getDistrictById(districtId: number, user: User):Promise<User> {
    return this.userRepository.getDistrictById(districtId,  user);
  };

  async getAllDistricts(username: string, district: string, user: User):Promise<User[]> {
    return this.userRepository.getAllDistricts(username, district, user);
  };
  async toggleDistrictAccess(districtId: number, user: User) {
    return this.userRepository.toggleDistrictAccess(districtId, user);
  }

}
