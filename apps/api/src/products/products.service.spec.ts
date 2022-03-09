import { Test, TestingModule } from "@nestjs/testing";

import { PrismaService } from "~/prisma.service";

import { ProductsService } from "./products.service";

describe("ProductsService", () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService, PrismaService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
