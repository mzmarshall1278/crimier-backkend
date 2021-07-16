import { EntityRepository, Repository } from "typeorm"
import { Crime } from './crime.entity';
import { CrimeStatus, CrimeType } from './enums/crime-info.enum';
import { User } from '../auth/user.entity';
import { AddCrimeDto } from './dto/add-crime.dto';
import { Suspect } from '../suspect/suspect.entity';
import { CrimeFilterDto } from './dto/crime-filter.dto';
import { Type } from 'class-transformer';

@EntityRepository(Crime)
export class CrimeRepository extends Repository<Crime> {

  async addCrime(crimeDto: AddCrimeDto, user: User): Promise<Crime> {
    const { type, date, time, location, evidence, suspects} = crimeDto;
    const crime = new Crime();
    
    crime.type = type;
    crime.date = date;
    crime.time = time;
    crime.location = location;
    crime.evidence = evidence;
    crime.status = CrimeStatus.NEW;
    crime.suspects = suspects;
    crime.district = user;
    
    await crime.save();
    delete crime.suspects;
    delete crime.district;
    
    return crime;
  }


  async getCrimes(crimeDto: CrimeFilterDto, districtId: number) {
    
    const { type, status, suspectId} = crimeDto;
    const query = this.createQueryBuilder('crime');

    query.where('crime.districtId = :districtId', { districtId });

    if (status) query.andWhere('crime.status Like :status', { status });

    if (type) query.andWhere('crime.type Like :type', { type });

    if (suspectId) {
      query.leftJoinAndSelect('crime.suspects', "suspect",);
      query.where('suspect.id = :suspectId', {suspectId})
    }

    
    const crimes = await query.getMany();
    crimes.forEach(crime => delete crime.suspects)
    return crimes;
  }
}