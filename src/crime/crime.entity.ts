import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { CrimeType } from './enums/crime-info.enum';
import { Suspect } from '../suspect/suspect.entity';

@Entity()
export class Crime extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: CrimeType;

  // acts

}