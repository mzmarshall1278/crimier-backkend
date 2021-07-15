import { EntityRepository, Repository } from "typeorm"
import { Crime } from './crime.entity';
import { CrimeType } from './enums/crime-info.enum';
import { User } from '../auth/user.entity';

@EntityRepository(Crime)
export class CrimeRepository extends Repository<Crime> {

  async addCrime(crimeType: CrimeType):Promise<Crime> {
    const crime = new Crime();
    crime.type = crimeType;

    // await crime.save();
    return crime;
  }

}