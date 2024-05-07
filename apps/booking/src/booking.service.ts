import { Inject, Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { bookingsRepository } from './booking.repository';
import { BILLING_SERVICE } from './constant/services';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class BookingService {
  constructor(
    private readonly bookingRepository: bookingsRepository,
    @Inject(BILLING_SERVICE) private hotelClient: ClientProxy,
  ) {}

  async create(request: CreateBookingDto) {
    const session = await this.bookingRepository.startTransaction();
    try {
      // const booking = await this.bookingRepository.create(request, { session });
      await lastValueFrom(
        this.hotelClient.emit('booking_created', { request }),
      );
      await session.commitTransaction();
      // return booking;
      return request;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    }
  }

  async getAll() {
    return await this.bookingRepository.find({});
  }
}
