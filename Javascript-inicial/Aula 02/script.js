const primeiro = 10
const segundo = 2
const terceiro = 5

function soma(){
    batata()
    return "resultado: " + (segundo + terceiro)
}

function batata(){
    console.log("esta eh uma funcao de soma")
}

// function somarComParametros(batata, n2, n3){
//     return batata + n2 + n3
// }

const somarComParametros = (n1, n2, n3) => n1 + n2 + n3

console.log(somarComParametros(2, 2, 2))

const teste = () => "texto qualquer"

console.log(teste())


function func(){
    return "qualquer"
}

const func = () => "qualquer"
