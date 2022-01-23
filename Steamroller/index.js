
const messyArray = [[[1]], [[[]]], [[3], [[4]]]];


const flatten = (acc, item) => {
    if (Array.isArray(item)) {
      console.log({'This item is an Array': item})
      return item.reduce(flatten, acc);
    }
   return [...acc, item];
}
  
const steamrollArray = arr => arr.reduce(flatten, []);



const cleanArray = steamrollArray(messyArray)

console.log({cleanArray})

