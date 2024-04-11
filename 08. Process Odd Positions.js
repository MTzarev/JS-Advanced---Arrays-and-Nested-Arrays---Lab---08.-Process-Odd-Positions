function processOddPositions(array) {
let finalArr = []
for (i=0; i<array.length; i++){
    let numToGet = array[i]
    if (i%2!==0){
        finalArr.push(numToGet*2)
    }
}
return finalArr.reverse().join(` `)
}
console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));