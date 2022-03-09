import { Module } from "@nestjs/common";

import { PrismaService } from "~/prisma.service";

import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

@Module({
  controllers: [ProductsController],
  providers: [PrismaService, ProductsService],
})
export class ProductsModule {}
