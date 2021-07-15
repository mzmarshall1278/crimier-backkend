import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { CrimeService } from './crime.service';
import { User } from '../auth/user.entity';
import { CrimeType } from './enums/crime-info.enum';
import { AuthGuard } from '@nestjs/passport';
import { AddCrimeDto } from './dto/add-crime.dto';

@Controller('crime')
@UseGuards(AuthGuard())
export class CrimeController {
  constructor(private crimeService: CrimeService) { }
  
  @Post('/addCrime')
  addUser(
    @Body() addCrimeDto: AddCrimeDto,
    @GetUser() user: User,
  ) {
    return this.crimeService.addCrime(addCrimeDto, user);
  }
}
