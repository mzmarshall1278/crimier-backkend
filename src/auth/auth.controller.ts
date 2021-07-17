import { Body, Controller, Get, Post, Query, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserCredentialsDto } from './dto/create-user-credentials.dto';
import { loginCredentialsDto } from './dto/login-credentials.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }
  
  @Post('/create')
  addUser(@Body(ValidationPipe) authDto: CreateUserCredentialsDto) {
    return this.authService.addUser(authDto);
  }

  @Post('/login')
  login(@Body(ValidationPipe) authDto: loginCredentialsDto): Promise<{accessToken: string}> {
    return this.authService.login(authDto);
  }

  @Get('/all')
  getAllUsers(
    @Query('username') username: string,
    @Query('district') district: string): Promise<User[]> {
    return this.authService.getAllDistricts(username, district);
  }
}
