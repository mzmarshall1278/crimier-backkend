import { CrimeEvidence } from './../enums/crime-info.enum';
import { IsDate, IsIn, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { CrimeType, CrimeStatus } from '../enums/crime-info.enum';

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

  @IsDate()
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
  @IsIn([CrimeStatus.DISCHARGED, CrimeStatus.IN_COURT, CrimeStatus.NEW, CrimeStatus.SENTENCED])  
  status: CrimeStatus;

  @IsNotEmpty()
  @IsNumber()
  district: number;

  @IsNotEmpty()
  @IsNumber()
  suspectId: number;
}