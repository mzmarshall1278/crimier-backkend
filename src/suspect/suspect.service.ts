import { AddSuspectDto } from './dto/add-suspect.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SuspectRepository } from './suspect.repository';
import { Suspect } from './suspect.entity';

@Injectable()
export class SuspectService {
  constructor(
    @InjectRepository(SuspectRepository)
    private suspectRepository: SuspectRepository
  ) { }
  async addSuspect(suspectDto: AddSuspectDto): Promise<Suspect> {
    return this.suspectRepository.addSuspect(suspectDto)
  }
}
