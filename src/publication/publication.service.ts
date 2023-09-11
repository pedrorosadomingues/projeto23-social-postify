import { Injectable } from '@nestjs/common';
import { CreatePublicationDTO } from './dto/create-publication.dto';

@Injectable()
export class PublicationService {
  addPublication(data: CreatePublicationDTO, user: { id: number; name: string; email: string; password: string; avatar: string; createdAt: Date; }) {
    
  }
}
