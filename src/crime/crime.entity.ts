import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { CrimeType, CrimeEvidence, CrimeStatus } from './enums/crime-info.enum';
import { Suspect } from '../suspect/suspect.entity';
import { User } from '../auth/user.entity';

@Entity()
export class Crime extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: CrimeType;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column()
  location: string;

  @Column()
  evidence: CrimeEvidence;

  @Column()
  status: CrimeStatus;

  @ManyToOne(type => User, user => user.crimes, {eager: false})
  district: User;

  @Column()
  districtId: number;

  @ManyToMany(type => Suspect, suspect => suspect.crimes, { eager: false })
    // @JoinTable()
  suspects: Suspect[];

}