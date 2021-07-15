import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp, OneToMany, OneToOne } from 'typeorm';
import { CrimeType } from './enums/crime-info.enum';
import { Suspect } from '../suspect/suspect.entity';
import { User } from '../auth/user.entity';

@Entity()
export class Crime extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: CrimeType;

  @Column()
  date: Date

  @Column()
  time: string

  @Column()
  location: string

  @ManyToOne(type => User, user => user.crimes, {eager: false})
  district: User;

  @ManyToOne(type => Suspect, suspect => suspect.crimes, { eager: false })
  suspect: Suspect;

}