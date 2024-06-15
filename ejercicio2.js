
let vowels = "aeiou"

let word = "Esta es una cadena de ejemplo"

let upperWord = ""

function vowelUpper(vowels, word){
    for(const letter of word){
        if(vowels.includes(letter)){
            upperWord = upperWord + letter.toUpperCase()
        }else{
            upperWord = upperWord + letter
        }
    }
    return upperWord
}

upperWord = vowelUpper(vowels, word)

console.log(upperWord)

