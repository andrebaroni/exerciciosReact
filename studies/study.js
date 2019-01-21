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
// //filter

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
// // de vez usar o de cima, usar esse: 
// const {street: st, city: ct, country: ctr } = address; //muda a variavel de street para st

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

//=================MAP==================

// const vetor = [
//     {
//         id:1,
//         nome: 'bicicleta',
//         categoria: 'veiculos'
//     },
//     {
//         id:2,
//         nome: 'carro',
//         categoria: 'veiculos'
//     }
// ]

// // vetor.map((item) => {
// //     console.log(item)
// //     return item
// // })

// const nomes = vetor.map(item => item.nome) //retorna um vetor so com nomes

// console.log("Nomes:", nomes)

// // const junto = [...vetor, ...nomes]
// // console.log(junto)

// const categorias = vetor.map(item => `Categoria: ${item.categoria}`)

// console.log("Categorias:", categorias)

//================REDUCE================

// const carrinho = [
//     { id: 1, preco: 2, qtd: 3},
//     { id: 2, preco: 10, qtd: 1},
//     { id: 3, preco: 25, qtd: 2},

// ]
// //map(item => item.preco *item.qtd). //cria um vetor com [6,10,50]
// const total = carrinho
// .map(item => item.preco *item.qtd)
// .reduce((soma, subtotal) => subtotal + soma, 0)//soma tudo do vetor

// console.log(total)

//==================FILTER=================

// const carrinho = [
//     { id: 1, preco: 2, qtd: 3, estoque: 10},
//     { id: 2, preco: 10, qtd: 1, estoque: 0},
//     { id: 3, preco: 25, qtd: 2, estoque: 5},

// ]
// //map(item => item.preco *item.qtd). 
// const subtotal = item => item.preco *item.qtd //map: cria um vetor com [6,10,50]
// const filtroEmEstoque = item => item.estoque >= item.qtd //filtra o que esta sem estoque
// const soma = (soma, subtotal) => subtotal + soma
// const total = carrinho
//                 .filter(filtroEmEstoque)
//                 .map(subtotal)
//                 .reduce(soma, 0)


// console.log(total)
// // const semEstoque = carrinho.filter(item => item.estoque < item.qtd)
// // console.log(semEstoque)

//=====================COMPOSE=================

// const func1 = (p1,p2) => console.log("func1", p1,p2)
// const func2 = (p1,p2) => console.log("func2", p1,p2)

// const compose = (...funcoes) => (...argumentos) => {
//     funcoes.forEach(funcoes => funcoes(...argumentos))
    
// }
// const func3 = compose(func1, func2)

// func3('Andre', 'Baroni')

