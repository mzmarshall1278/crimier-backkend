import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { SuspectService } from './suspect.service';
import { AddSuspectDto } from './dto/add-suspect.dto';
import { Suspect } from './suspect.entity';

@Controller('suspect')
export class SuspectController {

  constructor(private suspectService: SuspectService) { }
  
  @Post('/addsuspect')
  addSuspect(@Body(ValidationPipe) suspectDto: AddSuspectDto):Promise<Suspect> {
    return this.suspectService.addSuspect(suspectDto);
  }
}
