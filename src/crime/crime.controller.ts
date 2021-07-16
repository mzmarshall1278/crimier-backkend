import { UpdateCrimeDto } from './dto/update-crime.dto';
import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { CrimeService } from './crime.service';
import { User } from '../auth/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { AddCrimeDto } from './dto/add-crime.dto';
import { Crime } from './crime.entity';
import { CrimeFilterDto } from './dto/crime-filter.dto';
import { Suspect } from '../suspect/suspect.entity';

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

  @Get('/')
  getCrimes(
    @Query() crimeDto: CrimeFilterDto,
    @GetUser() user: User
  ) {
    return this.crimeService.getCrimes(crimeDto, user)
  }

  @Get('/single/:crimeId')
  getCrimeById(
    @Param('crimeId', ParseIntPipe) crimeId: number,
    @GetUser() user: User
  ) {
    return this.crimeService.getCrimeById(crimeId, user);
  }

  @Put()
  updateCrime(
    @Body() crimeDto: UpdateCrimeDto,
    @GetUser() user: User
  ) {
    
    return this.crimeService.updateCrime(crimeDto, user);
  }

 
}
