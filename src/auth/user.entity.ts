import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserStatus } from './user-status.enum';
import { Crime } from '../crime/crime.entity';
@Entity()
@Unique(['username'])
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  district: string;

  @Column()
  password: string;

  @Column()
  status: UserStatus;


  @Column()
  salt: string;

  @OneToMany(type => Crime, crime => crime.district, { eager: false })
  crimes: Crime[];

  @Column()
  hasAccess: Boolean;
  async validatePassword(password: string): Promise<boolean> {
    
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}