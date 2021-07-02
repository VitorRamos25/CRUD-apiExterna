const express = require('express')
const route = express.Router()
const jogo = require('../models/jogo')
const axios = require('axios').default


route.get('/', async (req, res, next) => {

    try {


        var url = 'https://projetotauanvitinho.herokuapp.com/desenvolvedores'
        let jogos = []
        jogos = await jogo.find()
        const Desenvolvedora = await axios.get(url)

        if(!jogos){

            res.statusCode = 204
            throw new Error("Os objetos procurados não foram encontrados!!")
        }
        const vetor = Desenvolvedora.data

        const resultado = vetor.map(function (nomes) {

            return {
                "nome": nomes.nome,
                "sede": nomes.sede,
                "jogo": nomes.jogos
            }
        })

        console.log(resultado)
        console.log(vetor)

        var i = 0
        var j = 0
        var k = 0

        for (i = 0; i < jogos.length; i++) {

            for (j = 0; j < resultado.length; j++) {

                for (k = 0; k < resultado[j].jogo.length; k++) {

                    if (jogos[i].nome == resultado[j].jogo[k]) {
                        jogos[i].desenvolvedora = resultado[j].nome
                        jogos[i].localizacao = resultado[j].sede
                    }

                }
            }
        }

        res.json(jogos)

    } catch (err) {

        next(err)
    }

})

route.post('/', async (req, res, next) => {

    try {

        const jogo = new jogo(req.body)
        const resultado = await jogo.save()
        if(!resultado){

            res.statusCode = 204
            throw new Error("O objeto fracassou ao salvar no banco!!")
        }
        res.json(resultado)

    } catch (err) {

        next(err)
    }

})

route.put('/:id', async (req, res, next) => {

    try {

        const id = req.params.id
        const corpo = req.body
        const resultado = await jogo.findByIdAndUpdate(id, corpo)
        if(!resultado){

            res.statusCode = 204
            throw new Error("O objeto falhou ao modificar seu conteudo!!")
        }
        
        res.json(resultado)

    } catch (err) {

        next(err)
    }


})

route.delete('/:id', async (req, res, next) => {

    try {

        const id = req.params.id
        const resultado = await jogo.findByIdAndDelete(id)
        if(!resultado){

            res.statusCode = 204
            throw new Error("O objeto falhou ao ser deletado")
        }

        res.json(resultado)
        

    } catch (err) {

        next(err)
    }


})

route.get('/:id', async (req, res, next) => {

    try {


        const id = req.params.id
        let Jogo = await jogo.findById(id)
        if(!Jogo){

            res.statusCode = 204
            throw new Error("O objeto procurado não foi encontrado!!")
        }

        res.json(Jogo)

    } catch (err) {
        next(err)
    }

})



module.exports = route