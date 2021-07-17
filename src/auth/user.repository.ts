import { EntityRepository, QueryBuilder, Repository } from "typeorm";
import { User } from './user.entity';
import { UserStatus } from './user-status.enum';
import * as bcrypt from 'bcrypt';
import { ConflictException, HttpException, HttpStatus, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { CreateUserCredentialsDto } from './dto/create-user-credentials.dto';
import { loginCredentialsDto } from './dto/login-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  ///a user in this application refers to a district or police division
  async addUser(authDto: CreateUserCredentialsDto) {
    const { username, password, district } = authDto;

    const user = new User();
    user.username = username;
    user.status = UserStatus.admin;
    user.district = district;
    user.hasAccess = true;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') throw new ConflictException('username has already been used');
      throw new InternalServerErrorException();
    }
  }

  // with filters
  async getAllDistricts(username: string, district: string):Promise<User[]> {
    const query = this.createQueryBuilder('user')

    if (username) query.andWhere('user.username Like :username', {username: `%${username}%`})
    if (district) query.andWhere('user.district Like :district', { district: `%${district}%` })
    
    const districts = await query.getMany();
    return districts;
  }

  async getDistrictById(districtId: number):Promise<User> {
    const district = await this.findOne(districtId);
    if (!district) throw new NotFoundException('No record found  for this district')

    delete district.password;
    delete district.salt;
    return district;
  }

  async validatePassword(credentials: loginCredentialsDto) {
    const { username, password } = credentials;
    const user = await this.findOne({ username });
    
    if (user && await user.validatePassword(password)) {
      return { username: user.username, district: user.district };
      // return 'success'
    } else {
      throw new NotFoundException('wrong username or password');
    }
  }

  private async hashPassword(password:string, salt: string):Promise<string> {
    return bcrypt.hash(password, salt)
  }
}