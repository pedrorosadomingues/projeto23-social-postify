import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class UpdatePublicationDTO {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  text: string;

  @IsOptional()
  @IsBoolean()
  published: boolean;
}