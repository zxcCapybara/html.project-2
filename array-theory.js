const names = ["Максим", "Даниэль", "Александра", "Ксения"];

// names.push('Алена')
// const firstName = names.shift()
// const name = names.pop()
// console.log('Names: ', names, name)

// console.log(names.reverse())
// const reversed = names.toReversed()
// const letters = ['e', 'b', 'c', 'd', 'a']
// console.log(letters.toSorted())
// console.log(letters)

// console.log(names.toSpliced(0, 2))
// console.log(names)

// const greateWoman = 'Ксения'
// const index = names.indexOf(greateWoman)
// console.log(index)
// const newNames = names.with(index, 'Ксения Капибара')
// names[index] = 'Ксения Капибара'
// console.log(names[index])
// console.log(names)
// console.log(newNames)

// const capitalNames = names.map(function(name, index) {
//     if (index === 3) {
//         return "Ксения Капибара"
//     }
//     return name
// })

// console.log(capitalNames)

// console.log(names.includes('Даниэль'))
// console.log(names.indexOf('Даниэль') !== -1)

const people = [
  { name: "Максим", budget: 1488 },
  { name: "Даниэль", budget: 1228 },
  { name: "Александра", budget: 1337 },
  { name: "Ксения", budget: 228 },
];

// let findedPerson
// for (let person of people) {
//     if (person.budget === 228) {
//         findedPerson = person
//     }
// }
// const finded = people.find((person) => person.budget === 1337)

// const findedPerson = people.find(function(person) {
//    return person.budget === 1228
// })

// const finded = people.findIndex(function(person) {
//     return person.budget === 1228
//  })

// console.log(people[finded])

// let sumBudget = 0
// const filtered = people.filter(function(person) {
//     return person.budget > 228
// })
// filtered.forEach(function(person) {
//     sumBudget += person.budget
// })

// const byBudget = p => p.budget > 228
// const pickBudget = p => p.budget

// const sumBudget = people
//     .filter(byBudget)
//     .map(pickBudget)
//     .reduce((acc, p) => acc + p, 0 )

// console.log(sumBudget)

const string = "Привет, как дела?";

const reversed = string
  .split("")
  .toReversed()
  .join("")


console.log(reversed);
