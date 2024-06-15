let word = "Hi I'm Tomas Solazzi"

let palabraInversa = ""


function stringInverso(cadena){
    for(let contador = 1; contador <= cadena.length; contador++){
        palabraInversa += cadena[cadena.length - contador]
    }
    return palabraInversa
}

palabraInversa = stringInverso(word)

console.log(palabraInversa)