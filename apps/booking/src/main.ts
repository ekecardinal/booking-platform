import { NestFactory } from '@nestjs/core';
import { BookingModule } from './booking.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(BookingModule);
  app.useGlobalPipes(new ValidationPipe());
  const configServices = app.get(ConfigService);
  await app.listen(configServices.get('PORT'));
}
bootstrap();
