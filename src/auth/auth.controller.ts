import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserCredentialsDto } from './dto/create-user-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }
  
  @Post('/create')
  addUser(@Body() authDto: CreateUserCredentialsDto) {
    return this.authService.addUser(authDto);
  }
}
