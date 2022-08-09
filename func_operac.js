const operacao = (num1,num2,operador) => {

      const soma = num1 + num2
      const sub = num1 - num2
      const mult = num1 * num2
      const div = num1 / num2

      const operadores = ['+','-','*','/']
      const operacao = [soma,sub,mult,div]

      for (let i = 0; i < operacao.length; i++)
      {
          if (operador === operadores[i])
          {
              return operacao[i]
          }
      }

}



module.exports = {operacao}

