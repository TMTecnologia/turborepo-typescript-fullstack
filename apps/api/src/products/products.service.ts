import { Injectable } from "@nestjs/common";
import { Product, Prisma } from "@prisma/client";

import { PrismaService } from "~/prisma.service";

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findUnique(
    productWhereUniqueInput: Prisma.ProductWhereUniqueInput
  ): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: productWhereUniqueInput,
    });
  }

  async findMany(
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.ProductWhereUniqueInput;
      where?: Prisma.ProductWhereInput;
      orderBy?: Prisma.ProductOrderByWithRelationInput;
    } = {}
  ): Promise<Product[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.product.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async create({
    price,
    ...rest
  }: Prisma.ProductCreateInput): Promise<Product> {
    return this.prisma.product.create({
      data: {
        price: new Prisma.Decimal(price),
        ...rest,
      },
    });
  }

  async update(params: {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.ProductUpdateInput;
  }): Promise<Product> {
    const { where, data } = params;
    return this.prisma.product.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.ProductWhereUniqueInput): Promise<Product> {
    return this.prisma.product.delete({
      where,
    });
  }
}
