let number = 30


function mathProperties(number){
    return{
        squared: Math.pow(number, 2),
        squareRoot: Math.sqrt(number),
        absoluteValor: Math.abs(number)
    }
}

let objectProperties = mathProperties(number)

console.log(objectProperties)