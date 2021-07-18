import { Body, Controller, Get, Param, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserCredentialsDto } from './dto/create-user-credentials.dto';
import { loginCredentialsDto } from './dto/login-credentials.dto';
import { User } from './user.entity';
import { GetUser } from './get-user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @UseGuards(AuthGuard())
  @Post('/create')
  addUser(
    @Body(ValidationPipe) authDto: CreateUserCredentialsDto,
    @GetUser() user: User
  ) {
    return this.authService.addUser(authDto, user);
  }

  @Post('/login')
  login(@Body(ValidationPipe) authDto: loginCredentialsDto): Promise<{accessToken: string}> {
    return this.authService.login(authDto);
  }

  @UseGuards(AuthGuard())
  @Get('/single/:id')
  getDistrictById(
    @Param('id') districtId: number,
    @GetUser() user: User
  ): Promise<User> {
    return this.authService.getDistrictById(districtId, user);
  };
  
  @UseGuards(AuthGuard())
  @Get('/all')
  getAllUsers(
    @Query('username') username: string,
    @Query('district') district: string,
    @GetUser() user: User
  ){
    return this.authService.getAllDistricts(username, district, user);
  }
  
  @Put('/toggleDistrict/:id')
  @UseGuards(AuthGuard())  
  toggleDistrict(
    @Param('id') districtId: number,
    @GetUser() user: User
    ) {
    return this.authService.toggleDistrictAccess(districtId, user);
  }
}
