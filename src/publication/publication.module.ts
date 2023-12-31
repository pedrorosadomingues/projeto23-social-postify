import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from 'src/auth/authGuard/auth.guard';
import { PublicationRepository } from './repository/publication.repository';
import { Prisma } from '@prisma/client';
import { PrismaPublicationRepository } from './repository/implementation/prismaPublication.implementation';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }), UserModule],
  controllers: [PublicationController],
  providers: [PublicationService,
    AuthService,
    AuthGuard,
    {
      provide: PublicationRepository,
      useClass: PrismaPublicationRepository,
    }
  ]
})
export class PublicationModule { }
