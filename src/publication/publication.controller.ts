import { Controller, Post, UseGuards, Body, Patch, Param, Get, Delete } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { AuthGuard } from 'src/auth/authGuard/auth.guard';
import { CreatePublicationDTO } from './dto/create-publication.dto';
import { UserRequest } from './decorator/user.decorator';
import { User } from '@prisma/client';
import { UpdatePublicationDTO } from './dto/update-publication.dto';

@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @UseGuards(AuthGuard)
  @Post()
  async addPublication(@Body() data: CreatePublicationDTO, @UserRequest() user: User ) {
    return await this.publicationService.addPublication(data, user.id);
  }

  @UseGuards(AuthGuard)
  @Patch(":id")
  async updatePublication(@Body() data: UpdatePublicationDTO, @UserRequest() user: User, @Param('id') id: number ) {
    return await this.publicationService.updatePublication(data, +id);
  }

  @UseGuards(AuthGuard)
  @Get()
  async findUserAllPublications(@UserRequest() user: User) {
    return this.publicationService.findAllUserPublications(user.id);
  }

  @UseGuards(AuthGuard)
  @Delete(":id")
  async deletePublication(@UserRequest() user: User, @Param('id') id: number) {
    return await this.publicationService.deletePublication(+id);
  }
}