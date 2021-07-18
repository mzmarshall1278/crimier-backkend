import { IsIn, IsOptional } from 'class-validator';
import { CrimeType, CrimeStatus } from '../enums/crime-info.enum';
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
    CrimeType.THEFT,
    CrimeType.MULTICRIME,
    CrimeType.OTHERS
  ])
  type: CrimeType;

  @IsOptional()
  @IsIn([CrimeStatus.NEW, CrimeStatus.DISCHARGED, CrimeStatus.IN_COURT, CrimeStatus.SENTENCED])
  status: CrimeStatus;

  @IsOptional()
  suspectId: number;
}