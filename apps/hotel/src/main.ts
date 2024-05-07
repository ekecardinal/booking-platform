import { NestFactory } from '@nestjs/core';
import { HotelModule } from './hotel.module';
import { RmqService } from '@app/common/rmq/rmq.service';

async function bootstrap() {
  const app = await NestFactory.create(HotelModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('HOTEL'));
  await app.startAllMicroservices();
}
bootstrap();
