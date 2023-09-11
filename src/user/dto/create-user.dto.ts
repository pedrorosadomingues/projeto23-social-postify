import {
    IsEmail,
    IsNotEmpty,
    IsString,
    Length,
  } from 'class-validator';
  
  export class CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;
  
    @IsString()
    @Length(6, 20)
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    avatar: string;
  }

  