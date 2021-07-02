const express = require('express');
const app = express();
const PORT = process.env.PORT || 6060;
const jogo = require('./src/api/routes/Jogo')
const consoles = require('./src/api/routes/Console')

app.use(express.json());

app.use('/jogo', jogo)

app.use('/console', consoles)

app.use(function(err, req, res, next){
    if(res.statusCode == 200){
        res.statusCode = 500
    }
    else if(res.statusCode == 404){

        res.json("Objeto não encontrado")
    }
    res.json({erro: err.message})
})

app.listen(PORT, function(){
    console.log('Servidor iniciado na porta: ' + PORT);
})