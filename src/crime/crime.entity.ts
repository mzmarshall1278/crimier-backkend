import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { CrimeType, CrimeEvidence } from './enums/crime-info.enum';
import { Suspect } from '../suspect/suspect.entity';

@Entity()
export class Crime extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: CrimeType;

  @Column()
  evidence: CrimeEvidence;

  @Column()
  crimeScene: string;

  @ManyToMany(type=> Suspect, suspect=> suspect.crimes, {eager: false})
  suspects: Suspect[]

  @Column()
  suspectId: number;

}