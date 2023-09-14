import { Publication } from "@prisma/client";
import { CreatePublicationDTO } from "../dto/create-publication.dto";
import { UpdatePublicationDTO } from "../dto/update-publication.dto";

export abstract class PublicationRepository {
  deletePublication(id: number) {
      throw new Error('Method not implemented.');
  }
  findAllUserPublications(id: number) {
      throw new Error('Method not implemented.');
  }
  abstract updatePublication(data: UpdatePublicationDTO, id: number): Promise<Publication>; 
  abstract addPublication(data: CreatePublicationDTO): Promise<Publication>;
  abstract findAllPublications(): Promise<Publication[]>;
  abstract findPublicationById(id: number): Promise<Publication>;
}