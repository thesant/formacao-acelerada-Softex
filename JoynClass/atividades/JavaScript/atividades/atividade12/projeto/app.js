const express = require('express');

const app = express();



app.listen(3000, ()=>{
    console.log('funcionando')
})

function saudacao() {
    const comprimentar = {
        resposta :200,
        mensagem:'seja bem vindo(a)',
        horario: Date()
    };
    return JSON.stringify(comprimentar)
}

app.get('',(req, res)=>{
    res.send(saudacao())
})