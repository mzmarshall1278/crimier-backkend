import { Type } from 'class-transformer';
import { IsNotEmpty, Min, MaxLength, MinLength, IsString, IsIn, IsDate } from 'class-validator';
import { IdenificationType, Gender } from '../suspect-info.enum';

export class AddSuspectDto {

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @MaxLength(40)
  name: string;

  @MinLength(11)
  @MaxLength(11)
  @IsNotEmpty()
  @IsString()
  identificationNumber: string;

  @IsNotEmpty()
  @IsIn([IdenificationType.BVN, IdenificationType.NIN])
  identificationType: IdenificationType;

  @IsNotEmpty()
  @IsIn([Gender.FEMALE, Gender.MALE, Gender.OTHERS])
  gender: Gender;

  @IsNotEmpty()
  @IsString()
  DOB: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(99)  
  address: string;

}