const mongoose = require('../data/index.js')

let jogoSchema = new mongoose.Schema({

    _id: Number,
    nome: String,
    genero: String,
    ano_lancamento: Number,
    protagonista: String,
    desenvolvedora: String,
    localizacao: String
    

}, {timestamps: true})

let jogo = mongoose.model('Jogo', jogoSchema)

module.exports = jogo