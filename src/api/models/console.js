const mongoose = require('../data/index.js')

let consoleSchema = new mongoose.Schema({

    _id: Number,
    nome: String,
    ano_lancamento: Number,
    fabricante: String,
    descricao: String
    
    

}, {timestamps: true})

let console = mongoose.model('Console', consoleSchema)

module.exports = console