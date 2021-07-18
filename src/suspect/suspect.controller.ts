import { Body, Controller, Get, Param, Post, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { SuspectService } from './suspect.service';
import { AddSuspectDto } from './dto/add-suspect.dto';
import { Suspect } from './suspect.entity';
import { GetSuspectsDto } from './dto/getSuspects.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('suspect')
@UseGuards(AuthGuard())
export class SuspectController {

  constructor(private suspectService: SuspectService) { }
  
  @Post('/addsuspect')
  addSuspect(@Body(ValidationPipe) suspectDto: AddSuspectDto):Promise<Suspect> {
    return this.suspectService.addSuspect(suspectDto);
  }

  @Get('/allsuspects')
  getAllSuspects(@Query(ValidationPipe) suspectsDto:GetSuspectsDto):Promise<Suspect[]> {
    return this.suspectService.getSuspects(suspectsDto);
  }

  @Get('/:id')
  getSuspectById(@Param('id') suspectId: number): Promise<Suspect>{
    return this.suspectService.getSuspectById(suspectId);
  };
}
