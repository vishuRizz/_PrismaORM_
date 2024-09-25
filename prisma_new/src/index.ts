import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import express from 'express';
const app = express()
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("server is runing baby")
})

app.post("/add-user",async (req, res)=>{
    try {
        const {userName, password, firstName, lastName, email} = req.body;
    const response = await prisma.user.create({
        data: {
            userName,
            password,
            firstName,
            lastName,
            email
        }
    })
    res.send(response)
    } catch (error) {
        console.log("fucking error", error)
    }
    
})
app.get("/get-user",async (req, res)=>{
    try {
        const {userId} = req.body;
        const response = await prisma.user.findFirst({
            select: {
               firstName: true,
               lastName: true,
               userName: true 
            },
            where: {
                id: userId
            }
        })
        res.send(response)
    } catch (error) {
        console.log("error found", error);
    }
   
})
app.post("/add-todos", async (req, res)=>{
    const {userId, title, description} = req.body;
    try {
        const response = await prisma.todo.create({
            data: {
                title,
                description,
                userId, 
            }
        })
        res.send(response)
    } catch (error) {
        console.log("fucking error found", error)
    }
})
app.get("/get-userandtodo", async (req, res)=>{
    const {userId} = req.body;
    const response = await prisma.todo.findMany({
        where:{
            userId
        },
        select:{
            title: true,
            
            
        }
    })
})
app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})

