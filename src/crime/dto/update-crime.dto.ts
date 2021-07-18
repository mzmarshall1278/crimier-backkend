import { IsNotEmpty, IsNumber, IsOptional, IsIn } from 'class-validator';
import { CrimeStatus, CrimeType, CrimeEvidence } from '../enums/crime-info.enum';
export class UpdateCrimeDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsOptional()
  @IsIn([CrimeStatus.NEW, CrimeStatus.DISCHARGED, CrimeStatus.IN_COURT, CrimeStatus.SENTENCED])
  status: CrimeStatus;

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
  @IsIn([CrimeEvidence.MEDIAFOOTAGE, CrimeEvidence.REDHANDED, CrimeEvidence.WITNESS])
  evidence: CrimeEvidence;
}