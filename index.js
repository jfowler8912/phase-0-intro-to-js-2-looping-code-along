// Code your solutions in this file
for (let age =30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
  }

  return gifts;
}

wrapGifts(gifts);
const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(name, event) {
    const shoppingCart = []
    for (let i = 0; i < names.length; i++){
        shoppingCart.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return shoppingCart
}
console.log(writeCards(["Charlie", "Samip", "Ali"], "Christmas"))

function countDown(i = 10){
    while( i >= 0){
    console.log(i)
    --i
    }
}



















// const names = ["Guadalupee", "Ollie", "Aki"];
// function writeCards(names, event) {
//   const shoppingCart = []
  
//     for (let i = 0; i < names.length; i++){
//         shoppingCart.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
//     } 
//     return shoppingCart
// }

// console.log(writeCards(["Charlie", "Samip", "Ali"], "Christmas"))