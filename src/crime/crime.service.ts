import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrimeRepository } from './crime.repository';

@Injectable()
export class CrimeService {
  constructor(
    @InjectRepository(CrimeRepository)
    private crimeRepository: CrimeRepository
  ) { }
  
}
