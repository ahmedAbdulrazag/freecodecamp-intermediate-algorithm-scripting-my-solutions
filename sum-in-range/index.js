
const numbers = [4, 1]

const sumAll = arr => {
    // Find the minimum and maximum numbers so we know 
    // from where to stat and when to end summing up
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    let sum = 0; 

    // our loop will keep running untill i === max
    // and in the meanwhile update our sum 
    for(let i = min; i <= max; i++) {
        sum += i;
    }
    return sum
}

const sumInRange = sumAll(numbers)

console.log({sumInRange})