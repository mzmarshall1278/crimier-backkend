import { EntityRepository, Repository } from "typeorm"
import { Crime } from './crime.entity';

@EntityRepository(Crime)
export class CrimeRepository extends Repository<Crime> {

}