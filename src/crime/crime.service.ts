import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrimeRepository } from './crime.repository';
import { CrimeType } from './enums/crime-info.enum';
import { Crime } from './crime.entity';
import { AddCrimeDto } from './dto/add-crime.dto';
import { User } from '../auth/user.entity';

@Injectable()
export class CrimeService {
  constructor(
    @InjectRepository(CrimeRepository)
    private crimeRepository: CrimeRepository
  ) { }
 async addCrime(crimeDto: AddCrimeDto, user: User):Promise<Crime> {
    return this.crimeRepository.addCrime(crimeDto, user)
  }
}
