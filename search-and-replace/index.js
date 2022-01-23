
// Check whether the first letter is upper case or not 
const isUpper = word => {
    return (word[0].toUpperCase() === word[0])
}


const myReplace = (str, before, after) => {
    // An array of words to iterate over
    const arrayOfWords = str.split(' ')

    // Convert the array into a dictionary 
    // here we have the key and value are the same for easy access
    const dictionary = arrayOfWords.reduce((acc, word) => {
        return {...acc, [word]: word}
    }, {})

    // check if 'before' exist in our dictionary 
    if(dictionary.hasOwnProperty(before)) {
        // Check if the first letter is upper case 
        if(isUpper(dictionary[before])) {
            // and if so make our first letter from 'after' upper case as well
            const upperCaseLetter = after[0].toUpperCase()
            const restOfTheWord = after.slice(1)
            // Update our dictionary with the new value 
            dictionary[before] = upperCaseLetter + restOfTheWord
        } else {
            // The same proccess applies here too 
            const lowerCaseLetter = after[0].toLowerCase()
            const restOfTheWord = after.slice(1)
            dictionary[before] = lowerCaseLetter + restOfTheWord
        }
    }

    // Return our dictionary values and then join them to return a string 
    return Object.values(dictionary).join(' ')
}

const replaced = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


console.log({replaced})