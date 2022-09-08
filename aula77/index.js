// 705.484.450-52 / 070.987.720.03
/* 
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77  0 45 32 56 24 20 20 0  10= 284

11 - (284 % 11) = 2 (Segundo dígito)
Se o número digito for maior que 9, consideramos 0.
*/

/* let cpf = '705.484.450-52'
let cpfLimpo = cpf.replace(/\D+/g, '')
let cpfArray = Array.from(cpfLimpo)
console.log(cpfArray.reduce((ac,val) => ac + Number(val), 0)) 
*/

function ValidaCPF(cpf) {
  this.cpf = cpf
  this.cpfLimpo = cpf.replace(/\D+/g, '')

  this.primeiroDigito = () => {
    let cpfArray = Array.from(this.cpfLimpo)
    let cpfPronto = cpfArray.slice(0, -2)
    let count = 10
    let cpfMultiplicado = cpfPronto.map(valor => {
      const result = Number(valor) * count
      count--
      return result
    })
    let cpfSomado = cpfMultiplicado.reduce((ac, valor) => ac + valor)
    const conta = 11 - (cpfSomado % 11)
    return conta <= 9 ? conta : 0
  }

  this.segundoDigito = () => {
    let cpfArray = Array.from(this.cpfLimpo)
    let cpfPronto = cpfArray.slice(0, -1)
    let count = 11
    let cpfMultiplicado = cpfPronto.map(valor => {
      const result = Number(valor) * count
      count--
      return result
    })
    let cpfSomado = cpfMultiplicado.reduce((ac, valor) => ac + valor)
    const conta = 11 - (cpfSomado % 11)
    return conta <= 9 ? conta : 0
  }

  this.cpfIsValid = () => {
    let cpfArray = Array.from(this.cpfLimpo)
    let cpfMenosDois = cpfArray.slice(0, -2)
//
    let cpfPronto = cpfMenosDois + this.primeiroDigito() + this.segundoDigito()
    console.log(cpfPronto)
    console.log(this.cpfLimpo)
    return cpfPronto === this.cpfLimpo
  }
}

const luiz = new ValidaCPF('705.484.450-52')
console.log(luiz.primeiroDigito())
console.log(luiz.segundoDigito())
console.log(luiz.cpfIsValid())
