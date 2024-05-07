import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
} from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  name: String;

  @IsNotEmpty()
  @IsEmail()
  email: String;

  @IsNotEmpty()
  @IsPhoneNumber()
  phone: String;

  @IsOptional()
  location: String;

  @IsOptional()
  destination: String;

  @IsOptional()
  visa: String;
}
