import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { CrimeType, CrimeEvidence } from './enums/crime-info.enum';

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

  // @ManyToMany(type=> Suspect, suspect=> suspect.crime, {eager: true})
  // suspect: string

  @Column()
  suspectId: number;

}