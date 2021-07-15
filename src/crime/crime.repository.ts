import { EntityRepository, Repository } from "typeorm"
import { Crime } from './crime.entity';
import { CrimeStatus, CrimeType } from './enums/crime-info.enum';
import { User } from '../auth/user.entity';
import { AddCrimeDto } from './dto/add-crime.dto';

@EntityRepository(Crime)
export class CrimeRepository extends Repository<Crime> {

  async addCrime(crimeDto: AddCrimeDto, user: User): Promise<Crime> {
    const { type, date, time, location, evidence, status, suspectId} = crimeDto;
    const crime = new Crime();
    
    crime.type = type;
    crime.date = date;
    crime.time = time;
    crime.location = location;
    crime.evidence = evidence;
    crime.status = CrimeStatus.NEW;
    crime.suspectId = suspectId;
    crime.districtId = user.id

    // await crime.save();
    return crime;
  }

}