import { EntityRepository, Repository } from "typeorm";
import { User } from './user.entity';
import { UserStatus } from './user-status.enum';
import * as bcrypt from 'bcrypt';
import { ConflictException, HttpException, HttpStatus, InternalServerErrorException } from "@nestjs/common";
import { CreateUserCredentialsDto } from './dto/create-user-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  async addUser(authDto: CreateUserCredentialsDto) {
    const { username, password, district } = authDto;

    const user = new User();
    user.username = username;
    user.status = UserStatus.admin;
    user.district = district;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);
    

    try {
      
      await user.save();
    } catch (error) {
      if (error.code === '23505') throw new ConflictException('username has already been used');
      
      throw new InternalServerErrorException();
    }
  }

  private async hashPassword(password:string, salt: string):Promise<string> {
    return bcrypt.hash(password, salt)
  }
}