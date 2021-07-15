import { EntityRepository, Repository } from "typeorm"
import { Suspect } from './suspect.entity';

@EntityRepository(Suspect)
export class SuspectRepository extends Repository<Suspect> {

}