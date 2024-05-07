import { Controller, Get } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';

@Controller()
export class HotelController {
  constructor(
    private readonly hotelService: HotelService,
    private readonly rmqService: RmqService,
  ) {}

  @Get()
  getHello(): string {
    return this.hotelService.getHello();
  }

  @EventPattern('booking_created')
  async handleBookingCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    await this.hotelService.hotel(data);
    this.rmqService.ack(context);
  }
}
