

const citizens = ['Sam', 'Ahmed', 'Mo', 'John', 'Sami', 'Sara', 'Sean']

// Destroy criminals from our society
function destroyer(arr) {
  const criminalsToDestroy = [...arguments].slice(1)

  const records = criminalsToDestroy.reduce((criminals, criminal) => {
    return {...criminals, [criminal]: criminal}
  }, {})

  // Only innocents will be allowed to be our society 
  const innocents = []


  // Run a background check on our citizens,
  // and if they're not found on your criminal records
  // allow them to pass and be part of our society of innocents
  for(const citizen of arr) {
    // Background check
    if(!records.hasOwnProperty(citizen)) {
      // Innocents 
      innocents.push(citizen)
    }
  }

  return innocents;
}


const innocentCitizens = destroyer(citizens, 'Sean', 'Sami', 'Ahmed');

console.log({innocentCitizens})