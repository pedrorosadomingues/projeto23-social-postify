import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UserRepository) {}

  async addUser(data: CreateUserDTO) {
    const hashPassword = bcrypt.hashSync(data.password, 10);
    const user = await this.usersRepository.findUserByEmail(data.email);
    if (user)
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    return await this.usersRepository.addUser({
      ...data,
      password: hashPassword,
    });
  }

  async findUserById(id: number) {
    const user = await this.usersRepository.findUserById(id);
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    return user;
  }
}