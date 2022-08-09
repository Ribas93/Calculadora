const express = require('express')
const {operacao} = require('./func_operac')

const app = express()


app.use(express.urlencoded({extended: false}))

// (req,res) => {}
app.get('/', (req,res) => {

    res.status(200).sendFile(__dirname + '/html_calc/calculadora.html')
})


app.post('/num',(req,res) => {

    let num1 = Number(req.body.numero1)

    let num2 = Number(req.body.numero2)

    let operador= req.body.operadores



    let resultado = operacao(num1,num2,operador)


res.status(200).send(`RESULTADO = ${resultado}`)
})













const porta = 5000;

app.listen(porta, ()=> {

    console.log('O servido esta listado na porta 5000.....')
})