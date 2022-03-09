import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ApiBody, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";

import { CreateProductDto } from "./dto/create-product.dto";
import { ProductsService } from "./products.service";

@ApiTags("products")
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiBody({
    type: CreateProductDto,
    description: "Store product structure",
  })
  @Post()
  create(@Body() productData: Prisma.ProductCreateInput) {
    return this.productsService.create(productData);
  }

  @ApiOperation({
    summary: "Gets all products from every category",
    description:
      "If you want to get all the products from your inventory and from each category, use this route. It takes no path or query params",
  })
  @Get()
  findAll() {
    return this.productsService.findMany();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productsService.findUnique({ id });
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() ProductUpdateInput: Prisma.ProductUpdateInput
  ) {
    return this.productsService.update({
      where: { id },
      data: ProductUpdateInput,
    });
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productsService.delete({ id });
  }
}
