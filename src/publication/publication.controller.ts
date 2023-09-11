import { Controller, Post, UseGuards, Body } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { AuthGuard } from 'src/auth/authGuard/auth.guard';
import { CreatePublicationDTO } from './dto/create-publication.dto';
import { UserRequest } from './decorator/user.decorator';
import { User } from '@prisma/client';

@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @UseGuards(AuthGuard)
  @Post()
  async addPublication(@Body() data: CreatePublicationDTO, @UserRequest() user: User ) {
    return await this.publicationService.addPublication(data, user);
  }

}