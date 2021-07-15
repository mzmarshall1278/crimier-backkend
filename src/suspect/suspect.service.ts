import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SuspectRepository } from './suspect.repository';

@Injectable()
export class SuspectService {
  constructor(
    @InjectRepository(SuspectRepository)
    private suspectRepository: SuspectRepository
  ){}
}
