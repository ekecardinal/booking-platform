import { Module } from '@nestjs/common';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule, RmqModule } from '../../../libs/common/src';
import { bookingsRepository } from './booking.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Booking, bookingSchema } from './schemas/booking.schema';
import { BILLING_SERVICE } from './constant/services';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/booking/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Booking.name, schema: bookingSchema }]),
    RmqModule.register({ name: BILLING_SERVICE }),
  ],
  controllers: [BookingController],
  providers: [BookingService, bookingsRepository],
})
export class BookingModule {}
