import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async create(@Body() request: CreateBookingDto) {
    return this.bookingService.create(request);
  }

  @Get()
  async getAll() {
    return await this.bookingService.getAll();
  }
}
