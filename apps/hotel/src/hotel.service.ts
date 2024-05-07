import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class HotelService {
  private readonly logger = new Logger(HotelService.name);
  getHello(): string {
    return 'Hello World!';
  }

  hotel(data: any) {
    this.logger.log('Hotel...', data);
  }
}
