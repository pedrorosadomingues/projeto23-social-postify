import { Injectable } from "@nestjs/common";
import { CreatePublicationDTO } from "../../dto/create-publication.dto";
import { PublicationRepository } from "../publication.repository";
import { PrismaService } from "src/prisma/prisma.service";

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
}