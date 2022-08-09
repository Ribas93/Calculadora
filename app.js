const express = require('express')


const app = express()


app.use(express.urlencoded({extended: false}))

// (req,res) => {}
app.get('/', (req,res) => {

    res.status(200).send(`
    <h1> Home Page </h1>
    <h3> Calculadora </h3>
    <p> insira dois numeros no espaco a seguir! </p>
    <form action="/num" method="POST"> 

    <label for="num1">Numero 1:</label>
    <input type="number" id="numero1" name="numero1" required><br>

    
    <input type="radio" id="+" name="operadores" value="+" required>
    <label for="+"> +</label><br>

    
    <input type="radio" id="-" name="operadores" value="-">
    <label for="-"> -</label><br>



    <input type="radio" id="/" name="operadores" value="/">
    <label for="/"> /</label><br>

    
    <input type="radio" id="*" name="operadores" value="*">
    <label for="*"> *</label><br>

    <label for="num2">Numero 2:</label>
    <input type="number" id="numero2" name="numero2" required>

    <input type="submit" value="Enviar">

    </form>
    `)
})


app.post('/num',(req,res) => {

    let dados = req.body
    
    console.log(dados)


    let num1 = Number(dados.numero1 )

    let num2 = Number(dados.numero2)

    let operador= dados.operadores

    let resultado;

      if(operador === "+")
    {
      resultado = num1 + num2
    }
    else if(operador === "-")
    {
        resultado = num1 - num2
    }
    else if(operador === "*")
    {
        resultado = num1 * num2
    }
    else
    {
        resultado = num1 / num2
    }



res.status(200).send(`RESULTADO = ${resultado}`)
})













const porta = 5000;


app.listen(porta, ()=> {

    console.log('O servido esta listado na porta 5000.....')
})