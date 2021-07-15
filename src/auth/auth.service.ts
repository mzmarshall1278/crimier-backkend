import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { CreateUserCredentialsDto } from './dto/create-user-credentials.dto';
import { loginCredentialsDto } from './dto/login-credentials.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) 
    private userRepository: UserRepository
  ) { }
  
  async addUser(authDto: CreateUserCredentialsDto):Promise<void>{
    return this.userRepository.addUser(authDto);
  }
  
  async login(authDto: loginCredentialsDto) {
    return this.userRepository.validatePassword(authDto);
  }
}
