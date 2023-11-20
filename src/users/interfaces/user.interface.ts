import { IsEmail, IsNotEmpty, IsString, MinLength, Matches } from "class-validator";

export class UserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @Matches(/^[a-zA-Z0-9]+$/)
  password: string;
}