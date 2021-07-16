import { Body, Controller, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { CrimeService } from './crime.service';
import { User } from '../auth/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { AddCrimeDto } from './dto/add-crime.dto';
import { Crime } from './crime.entity';

@Controller('crime')
@UseGuards(AuthGuard())
export class CrimeController {
  constructor(private crimeService: CrimeService) { }
  
  @Post('/addcrime')
  addCrime(
    @Body() addCrimeDto: AddCrimeDto,
    @GetUser() user: User,
  ):Promise<Crime> {
    return this.crimeService.addCrime(addCrimeDto, user);
  }
}
