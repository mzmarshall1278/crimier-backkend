import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { CrimeService } from './crime.service';
import { User } from '../auth/user.entity';
import { CrimeType } from './enums/crime-info.enum';
import { AuthGuard } from '@nestjs/passport';

@Controller('crime')
@UseGuards(AuthGuard())
export class CrimeController {
  constructor(private crimeService: CrimeService) { }
  
  @Post('/addCrime')
  addUser(
    @Body('type') type: CrimeType
  ) {
    return this.crimeService.addCrime(type);
  }
}
