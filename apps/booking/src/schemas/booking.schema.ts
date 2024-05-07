import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, versionKey: false })
export class Booking extends AbstractDocument {
  @Prop()
  name: String;

  @Prop()
  email: String;

  @Prop()
  phone: String;

  @Prop()
  location: String;

  @Prop()
  destination: String;

  @Prop()
  visa: String;
}

export const bookingSchema = SchemaFactory.createForClass(Booking);
