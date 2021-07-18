import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class GetSuspectsDto {
  @IsString()
  @IsOptional()
  @MinLength(11)
  @MaxLength(11) 
  BVN: string;
  
  @IsString()
  @IsOptional()
  @MinLength(11)
  @MaxLength(11)    
  NIN: string;

  @IsString()
  @IsOptional()
  name: string
}