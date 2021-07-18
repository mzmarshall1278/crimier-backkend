import { UpdateCrimeDto } from './dto/update-crime.dto';
import { EntityRepository, Repository } from "typeorm"
import { Crime } from './crime.entity';
import { CrimeStatus } from './enums/crime-info.enum';
import { User } from '../auth/user.entity';
import { AddCrimeDto } from './dto/add-crime.dto';
import { CrimeFilterDto } from './dto/crime-filter.dto';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(Crime)
export class CrimeRepository extends Repository<Crime> {

  async addCrime(crimeDto: AddCrimeDto, user: User): Promise<Crime> {
    const { type, date, time, location, evidence, suspects } = crimeDto;
    // if(!user.hasAccess) throw new UnauthorizedException('Head Quarters has blocked your access')
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

    if (districtId !== 1)  query.where('crime.districtId = :districtId', { districtId });

    if (status) query.andWhere('crime.status = :status', { status });

    if (type) query.andWhere('crime.type = :type', { type });

    if (suspectId) {
      query.leftJoinAndSelect('crime.suspects', "suspect",);
      query.where('suspect.id = :suspectId', {suspectId})
    }

    
    const crimes = await query.getMany();
    crimes.forEach(crime => delete crime.suspects)
    return crimes;
  };

  async updateCrime(crimeDto: UpdateCrimeDto, districtId: number) {
    const { id, type, status, evidence } = crimeDto;
    const crime = await this.getCrime(id, districtId);

    if (type) crime.type = type;
    if (status) crime.status = status;
    if (evidence) crime.evidence = evidence;
    crime.save()
    return crime;
  };

  async getCrime(id: number, districtId: number) {
    
    const crime = await this.findOne({ where: { id, districtId } });

    if (!crime) throw new NotFoundException('This crime record does not exist or does not belong to your district')
    
    return crime;
  }
}