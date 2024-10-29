import express from 'express' //importando biblioteca

const app = express() //inicializando("documentado")
app.use(express.json)//avisar express para usar json
const user = []

app.post('/usuarios',(req, res)=>{
     console.log(req)
     res.send('Ok, deu bom!')
})

/*
==================Rotas==============
1) tipo de rota / método
2) endereço ("www.google/buscar/.com")
*/
app.get('/usuarios', (req, res)=>{
    res.send('Ok, deu bom!')//enviando resposta
})
/*
Criar listagem de usuarios(API)

    -criar um usuario
    -listar todos os usuarios
    -editar usuario
    -deletar usuario
*/

app.listen(7000)