import { IsIn, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { CrimeType, CrimeStatus } from '../enums/crime-info.enum';
import { Suspect } from '../../suspect/suspect.entity';
export class CrimeFilterDto {

  @IsOptional()
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
  type: CrimeType;

  @IsOptional()
  @IsIn([CrimeStatus.NEW, CrimeStatus.DISCHARGED, CrimeStatus.IN_COURT, CrimeStatus.SENTENCED])
  status: CrimeStatus;

  @IsOptional()
  suspectId: number;
}