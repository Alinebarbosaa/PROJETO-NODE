const express = require("express")

const server = express()

//ROTAS
server.get('/abacate', (request,response) => {
    return response.send("Esse é o seu abacate")
})
server.get

server.get('/morango', (request.query.usuario) => {
    return response.send("Esse é o seu morango")

    console.log(request.query.usuario)
   
})

server.listen(3000)

