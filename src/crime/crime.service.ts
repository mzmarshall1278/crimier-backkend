import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrimeRepository } from './crime.repository';
import { CrimeType } from './enums/crime-info.enum';
import { Crime } from './crime.entity';

@Injectable()
export class CrimeService {
  constructor(
    @InjectRepository(CrimeRepository)
    private crimeRepository: CrimeRepository
  ) { }
 async addCrime(crimeType: CrimeType):Promise<Crime> {
    return this.crimeRepository.addCrime(crimeType)
  }
}
