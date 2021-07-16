import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrimeRepository } from './crime.repository';
import { Crime } from './crime.entity';
import { AddCrimeDto } from './dto/add-crime.dto';
import { User } from '../auth/user.entity';
import { CrimeFilterDto } from './dto/crime-filter.dto';

@Injectable()
export class CrimeService {
  constructor(
    @InjectRepository(CrimeRepository)
    private crimeRepository: CrimeRepository
  ) { }

 async addCrime(crimeDto: AddCrimeDto, user: User):Promise<Crime> {
   return this.crimeRepository.addCrime(crimeDto, user);
 }
  
  async getCrimes(crimeDto: CrimeFilterDto, user: User) {
    return this.crimeRepository.getCrimes(crimeDto, user.id);
  }

  async getCrimeById(crimeId: number, user: User) {
    return this.crimeRepository.getCrime(crimeId, user.id);
  }
}
