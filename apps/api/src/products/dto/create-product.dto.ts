import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import { IsOptional, IsString, IsCurrency } from "class-validator";

export class CreateProductDto {
  @IsString()
  @ApiProperty()
  name: string;
  @IsCurrency()
  @ApiProperty({ default: "10" })
  price: Prisma.Decimal | number | string;
  @IsString()
  @IsOptional()
  @ApiProperty()
  description?: string;
}
