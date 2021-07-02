const express = require('express')
const route = express.Router()
const console = require('../models/console')


route.get('/', async (req, res, next) => {

    try {

 
        let consoles = []
        consoles = await console.find()
        if(!consoles){

            res.statusCode = 204
            throw new Error("Os objetos procurados não foram encontrados!!")
        }

        res.json(consoles)

    } catch (err) {

        next(err)
    }

})

route.post('/', async (req, res, next) => {

    try {

        const consoles = new console(req.body)
        const resultado = await consoles.save()
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
        const resultado = await console.findByIdAndUpdate(id, corpo)
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
        const resultado = await console.findByIdAndDelete(id)
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
        let Console = await console.findById(id)
        if(!console){

            res.statusCode = 204
            throw new Error("O objeto procurado não foi encontrado!!")
        }

        res.json(Console)

    } catch (err) {
        next(err)
    }

})



module.exports = route