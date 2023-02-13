import readLineSync from 'readline-sync'
import ck from 'chalk'

const valores = []
let input = ""

while(input != "sair")
{
    valores.push(input)
    input = readLineSync.question(ck.red("Digite uma propriedade CSS")).toLocaleLowerCase()
}
console.log(ck.green.italic(valores.sort().join("\n"))) 