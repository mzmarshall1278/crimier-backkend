import { EntityRepository, Repository } from "typeorm"
import { Suspect } from './suspect.entity';
import { AddSuspectDto } from './dto/add-suspect.dto';

@EntityRepository(Suspect)
export class SuspectRepository extends Repository<Suspect> {

  async addSuspect(suspectDto: AddSuspectDto) {
    const { name, DOB, gender, identificationNumber, identificationType, address } = suspectDto;
   
    const suspect = new Suspect();
    suspect.name = name;
    suspect.DOB = DOB;
    suspect.gender = gender;
    suspect.identificationNumber = identificationNumber;
    suspect.identificationType = identificationType;
    suspect.address = address;
    
    await suspect.save()

    return suspect;
    
  }
}