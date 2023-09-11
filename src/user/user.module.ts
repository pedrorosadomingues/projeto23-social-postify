import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repository';
import { PrismaUsersRepository } from './repository/implementation/prismaUsers.implementation';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: UserRepository,
      useClass: PrismaUsersRepository,
    },],
  exports: [
    UserService,
    {
      provide: UserRepository,
      useClass: PrismaUsersRepository,
    },
  ],
})
export class UserModule { }
