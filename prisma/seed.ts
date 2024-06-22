
import { PrismaClient } from "@prisma/client";
import { items } from "./productNeerajWhatsapp";

const prisma = new PrismaClient();
async function main(){
    for(let item of items){
        await prisma.productLink.create({
            data:{
                productName:item.productName,
                productLink:item.productUrl
            }
        })
    }
}
main().catch(e=>{
    console.log(e);
    process.exit(1);
}).finally(()=>{
    prisma.$disconnect();
})

