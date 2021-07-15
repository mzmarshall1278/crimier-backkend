import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Crime } from '../crime/crime.entity';

@Entity()
export class Suspect extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  address: string

  @ManyToMany(type=> Crime, crime=> crime.suspects, {eager: true})
  crimes: Crime[]


}