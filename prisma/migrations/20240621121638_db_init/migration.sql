-- CreateTable
CREATE TABLE "ProductLink" (
    "id" SERIAL NOT NULL,
    "productName" TEXT NOT NULL,
    "productLink" TEXT NOT NULL,

    CONSTRAINT "ProductLink_pkey" PRIMARY KEY ("id")
);
