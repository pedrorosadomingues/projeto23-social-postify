import { IsString, IsBoolean } from "class-validator";

export class CreatePublicationDTO {
    @IsString()
    image: string;

    @IsString()
    title: string;

    @IsString()
    text: string;

    @IsString()
    dateToPublish: string;

    @IsBoolean()
    published: boolean;

    @IsString()
    socialMedia: string;  
    
    @IsString()
    userId: number;
}