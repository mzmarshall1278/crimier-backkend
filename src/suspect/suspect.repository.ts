import { EntityRepository, Repository } from "typeorm"
import { Suspect } from './suspect.entity';
import { AddSuspectDto } from './dto/add-suspect.dto';
import { GetSuspectsDto } from './dto/getSuspects.dto';

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

  async getSuspectsByInfo(userDto: GetSuspectsDto): Promise<Suspect[]> {
    const { BVN, NIN, name } = userDto;
    const query = this.createQueryBuilder('suspect');

    if (BVN) query.andWhere('suspect.identificationNumber = :BVN', { BVN });
    if (NIN) query.andWhere('suspect.identificationNumber = :NIN', { NIN });
    if (name) query.andWhere('suspect.name Like :name', { name: `%${name}%` });

    const suspects = await query.getMany();
    return suspects;
  }
}