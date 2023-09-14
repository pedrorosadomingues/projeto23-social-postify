import { Injectable } from "@nestjs/common";
import { CreatePublicationDTO } from "../../dto/create-publication.dto";
import { PublicationRepository } from "../publication.repository";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdatePublicationDTO } from "src/publication/dto/update-publication.dto";

@Injectable()
export class PrismaPublicationRepository implements PublicationRepository {
  constructor(private readonly prisma: PrismaService) {}

  async addPublication(data: CreatePublicationDTO) {
    return await this.prisma.publication.create({ data: data });
  }

  async findAllPublications() {
    return await this.prisma.publication.findMany({});
  }

  async findPublicationById(id: number) {
    return await this.prisma.publication.findFirst({ where: { id } });
  }

  async updatePublication(data: UpdatePublicationDTO, id: number) {
    return await this.prisma.publication.update({ where: { id: id }, data: data });
  }

  async findAllUserPublications(id: number) {
    return await this.prisma.publication.findMany({ where: { userId: id } });
  }

  async deletePublication(id: number) {
    return await this.prisma.publication.delete({ where: { id: id } });
  }
}