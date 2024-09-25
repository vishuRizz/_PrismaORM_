import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertsUser(username: string, password: string, firstName: string, lastName: string){
    const res = await prisma.user.create({
        data:{
            email: username,
            password,
            firstName,
            lastName
        },
        select: {
            id: true,
        }
    })
    console.log(res)
}
insertsUser('anshul@gmail.com', '123456', 'test', 'test') 
interface Update{
    firstName: string,
    lastName: string
}
async function updateUser(username: string, {firstName, lastName}: Update){
    const res = await prisma.user.update({
        where: {
            email: username
            
        },
        data: {
            firstName,
            lastName
            }
    })
}
updateUser("vishu@gmail.com", {
    firstName: "vishu",
    lastName: "pratap"
}).then(()=>{
    console.log("updated")
}).catch((err)=>{
    console.log(err)
}).finally(async ()=>{
    await prisma.$disconnect()
})