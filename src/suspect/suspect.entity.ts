import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Crime } from '../crime/crime.entity';
import { IdenificationType, Gender } from './suspect-info.enum';

@Entity()
export class Suspect extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  identificationType: IdenificationType;

  @Column()
  identificationNumber: string;

  @Column()
  DOB: string;

  @Column()
  gender: Gender;

  @Column()
  address: string;

  @ManyToMany(type => Crime, crime => crime.suspects, { eager: false })
  @JoinTable()
  crimes: Crime[];


}