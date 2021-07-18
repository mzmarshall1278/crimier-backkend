import { CrimeEvidence } from './../enums/crime-info.enum';
import { IsArray, IsDate, IsIn, IsNotEmpty, IsString } from "class-validator"
import { CrimeType } from '../enums/crime-info.enum';
import { Suspect } from '../../suspect/suspect.entity';

export class AddCrimeDto {
  @IsIn([
    CrimeType.ADULTERYORFORNICATION,
    CrimeType.BLASPHEMY,
    CrimeType.BURGLARY,
    CrimeType.DRUGABUSE,
    CrimeType.FRAUD,
    CrimeType.ILLEGALBUSINESS,
    CrimeType.MURDER,
    CrimeType.RAPE,
    CrimeType.ROBERY,
    CrimeType.THEFT,
    CrimeType.MULTICRIME,
    CrimeType.OTHERS
  ])
  @IsNotEmpty()
  type: CrimeType;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  time: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  @IsIn([CrimeEvidence.MEDIAFOOTAGE, CrimeEvidence.REDHANDED, CrimeEvidence.WITNESS])
  evidence: CrimeEvidence;


  @IsNotEmpty()
  @IsArray()
  suspects: Suspect[];
}