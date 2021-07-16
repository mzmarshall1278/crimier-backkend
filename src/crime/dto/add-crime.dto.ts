import { CrimeEvidence } from './../enums/crime-info.enum';
import { IsArray, IsDate, IsIn, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { CrimeType, CrimeStatus } from '../enums/crime-info.enum';
import { User } from '../../auth/user.entity';
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
    CrimeType.THEFT
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