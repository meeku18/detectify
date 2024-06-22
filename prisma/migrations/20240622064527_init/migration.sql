/*
  Warnings:

  - A unique constraint covering the columns `[productName]` on the table `ProductLink` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "ProductImage" (
    "id" SERIAL NOT NULL,
    "productName" TEXT NOT NULL,
    "image" BYTEA NOT NULL,

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductLink_productName_key" ON "ProductLink"("productName");

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_productName_fkey" FOREIGN KEY ("productName") REFERENCES "ProductLink"("productName") ON DELETE RESTRICT ON UPDATE CASCADE;
