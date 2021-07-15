import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserCredentialsDto } from './dto/create-user-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }
  
  @Post('/create')
  addUser(@Body(ValidationPipe) authDto: CreateUserCredentialsDto) {
    return this.authService.addUser(authDto);
  }
}
