import { Publication } from "@prisma/client";
import { CreatePublicationDTO } from "../dto/create-publication.dto";

export abstract class PublicationRepository {
  abstract addPublication(data: CreatePublicationDTO): Promise<Publication>;
  abstract findAllPublications(): Promise<Publication[]>;
  abstract findPublicationById(id: number): Promise<Publication>;
}