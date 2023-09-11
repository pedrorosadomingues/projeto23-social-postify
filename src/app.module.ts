import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PublicationModule } from './publication/publication.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, PublicationModule, PrismaModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
