import { IsString, IsBoolean, IsNumber, IsNotEmpty } from "class-validator";

export class CreatePublicationDTO {
    @IsNotEmpty()
    @IsString()
    image: string;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    text: string;

    @IsNotEmpty()
    @IsString()
    dateToPublish: string;

    @IsNotEmpty()
    @IsBoolean()
    published: boolean;

    @IsString()
    socialMedia: string;  
   
    userId: number;
}