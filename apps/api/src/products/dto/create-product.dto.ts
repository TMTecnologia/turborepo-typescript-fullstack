import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import { IsOptional, IsString, IsCurrency } from "class-validator";

export class CreateProductDto {
  @IsString()
  @ApiProperty({ type: "string" })
  name: string;
  @IsCurrency()
  @ApiProperty({ type: "string", example: "10" })
  price: Prisma.Decimal | number | string;
  @IsString()
  @IsOptional()
  @ApiProperty({ type: "string" })
  description?: string;
}
