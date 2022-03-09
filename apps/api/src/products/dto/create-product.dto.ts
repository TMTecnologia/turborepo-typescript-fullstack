import { Prisma } from "@prisma/client";
import { IsOptional, IsString, IsCurrency } from "class-validator";

export class CreateProductDto {
  @IsString()
  name: string;
  @IsCurrency()
  price: Prisma.Decimal | number | string;
  @IsString()
  @IsOptional()
  description?: string;
}
