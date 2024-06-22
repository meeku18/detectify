"use server"
import prisma from "@/lib/prisma";


export async function getLink({ productName }: { productName: string }) {
    //console.log(productName);
    console.log("hello");
    try {
        const productLink = await prisma.productLink.findUnique({
            where: {
                productName: productName,
            },
        });
        return productLink?.productLink;
    } catch (error) {
        console.error(`Error fetching product link for ${productName}:`, error);
        throw error; // Throw the error so it can be handled by the caller
    }
}