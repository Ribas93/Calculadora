const express = require('express')


const app = express()


// (req,res) => {}
app.get('/', (req,res) => {

    res.status(200).send(`
    <h1> Home Page </h1>
    <h3> Calculadora </h3>
    <p> insira dois numeros no espaco a seguir! </p>
    <form action="/num" method="POST"> 
    <label for="num1">Numero 1:</label>
    <input type="number" id="numero1" name="numero1">
    <label for="num2">Numero 2:</label>
    <input type="number" id="numero2" name="numero2">
    <input type="submit" value="Enviar">
    </form>
    `)
})


app.post('/num',(req,res) => {
res.send('Obrigado os numeros foram recebidos!!')
})













const porta = 5000;


app.listen(porta, ()=> {

    console.log('O servido esta listado na porta 5000.....')
})