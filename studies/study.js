//var -> function
//let -> block
//const -> block

//===================================

// const person = {
//     name: "Andre",
//     walk() {
//         console.log(this); //é referencia a essa pessoa
//     },
//     talk() {},
// };

// person.walk();

// const walk = person.walk.bind(person); //usa a referencia do this
// walk()

//===================================

// const square = function(number){
//     return number * number;
// }

// const square = number => number * number;

// const jobs = [
//     {id: 1, isActive: true},
//     {id: 2, isActive: false},
//     {id: 3, isActive: true},
// ]
// const activeJobs = jobs.filter(job => job.isActive)
// console.log(activeJobs)
//====================================

// const person = {
//   talk() {
//     //var self = this; //com arrow function, o this nao muda
//       setTimeout(() => {
//           console.log('this', this)
//       }, 1000)
      
//   }
// }
// person.talk()

//======================================

// const colors = ['red', 'green', 'blue']
// const items = colors.map(color => `<li>${color}</li>`)

// console.log(items)

//======================================

// const address = {
//   street: 'a',
//   city: '',
//   country: ''
// }

// // const street = address.street;
// // const city = address.city;
// // const country = address.country;
// // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// const {street: st, city: ct, country: ctr } = address;

// console.log(st)

//=======================================

// const first = [1, 2, 3]
// const second = [4, 5, 6]

// //const combined = first.concat(second)
// const combined = [...first, 'a', ...second]

// console.log(combined)

// const first = {name: 'Andre'}
// const second = { job: 'Instructor'}

// const combined = {...first, ...second, location: "Australia"}
// console.log(combined)

//=====================================

// class Person {
//   constructor(name){
//     this.name = name;
//   }

//   walk() {
//   console.log("walking...")
//   }
// }

// const person = new Person('Mosh')
// person.walk()

//======================================

// class Person {
//   constructor(name){
//     this.name = name;
//   }

//   walk() {
//   console.log("walking...")
//   }
// }

// class Teacher extends Person {
// constructor(name, degree){
//   super(name)
//   this.degree = degree
// }

//   teach(){
//     console.log("teaching...")
//   }
// }

// const teacher = new Teacher("Mosh", "CC")

//=======================================

