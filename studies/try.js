const catalogo = [
    {id: 1,
        nome: "240sx",
        preco: 22500,
        hp: 140,
        motor: "KA24DE",
        turbo: false,
        cor: 'Preto'
    },
    {id: 2,
        nome: "Silvia",
        preco: 24000 + '$',
        hp: 160,
        motor: "SR20DET",
        turbo: false,
        cor: 'Cinza',
        },
    {id: 3,
        nome: "350Z",
        preco: 15000 + '$',
        hp: 250,
        motor: "VQ35DE",
        turbo: true,
        cor: 'Rosa',
        },
]


const cor = catalogo.map(item => item.cor) //retorna só as cores
console.log(cor)













// class Nissan {
//     walk(){
//         Console.log("Walking...")
//     }
// }

// class Silvia extends Nissan{
    
// }