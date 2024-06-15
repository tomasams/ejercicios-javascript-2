
let numberArrays = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10, 100]
let numberSquaredArray = []

function numbersquare(numberArrays){
    for (const number of numberArrays){
        numberSquaredArray.push(number * number)
    }
    return numberSquaredArray
}

numberSquaredArray = numbersquare(numberArrays)

console.log(numberSquaredArray)