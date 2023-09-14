import { Injectable } from '@nestjs/common';
import { CreatePublicationDTO } from './dto/create-publication.dto';
import { PublicationRepository } from './repository/publication.repository';
import { UpdatePublicationDTO } from './dto/update-publication.dto';

@Injectable()
export class PublicationService {
    constructor(private readonly publicationRepository: PublicationRepository) { }

    addPublication(data: CreatePublicationDTO, id: number) {
        return this.publicationRepository.addPublication({ ...data, userId: id });
    }

    updatePublication(data: UpdatePublicationDTO, id: number) {
        return this.publicationRepository.updatePublication(data, id);
    }

    findAllUserPublications(id: number) {
        return this.publicationRepository.findAllUserPublications(id);
    }

    deletePublication(id: number,) {
        return this.publicationRepository.deletePublication(id);
    }
}
