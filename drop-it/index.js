
const numbers = [1, 2, 3]


const isLessThanThree = n => n < 3;

const dropElements = (arr, func) => {
  for(const i in arr) {
    const testResults = func(arr[i])
    if(testResults) {
      return arr.slice(i)
    } 
  }
  
  return []
}


const results = dropElements(numbers, isLessThanThree);

console.log({results})