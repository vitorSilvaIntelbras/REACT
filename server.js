import express from 'express' //importando biblioteca
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()

const app = express() //inicializando("documentado")

app.use(express.json())//avisar express para usar json
app.use(cors())

app.post('/usuarios', async (req, res)=>{
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

     res.status(201).json(req.body)
})

app.get('/usuarios', async (req, res)=>{
    let usuarios = []
    if (req.query){
        usuarios = await prisma.user.findMany({
            where:{
                name: req.query.name
            }
        })
    }else{
        usuarios = await prisma.user.findMany()
    }
    const users = await prisma.user.findMany()
    res.status(200).json(users)
})


app.put('/usuarios/:id', async (req, res)=>{
    await prisma.user.update({
        where:{
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

     res.status(201).json(req.body)
})


app.delete('/usuarios/:id', async (req, res)=>{
    await prisma.user.delete({
        where:{
            id: req.params.id
        }
    })
     res.status(201).send("Deletado com sucesso")
})


app.listen(7000)

/*
vitor
iHQUyHLtoqqaZpIY
*/