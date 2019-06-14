//import Lodash
const _ = require('./lodash.js')

//create a collection of products
 let products = [
   {
     name: 'Item1',
     price: 20,
     isbn: 12343434
    },
   {
     name: 'Item2',
     price: 25,
     isbn: 45843570
   },
   {
     name: 'Item3',
     price: 10,
     isbn: 13484570
   },
   {
     name: 'Item4',
     price: 29,
     isbn: 87690654
   }
 ]

 // console.log(products)
 //order products by price

 let order_price =_.orderBy(products, 'price')
 console.log ('Price_Lowest_to_highest', order_price)

 //extract unique products by ISBN/code
 let unique = _.uniqBy(products, 'ISBN')
 console.log('ISBN', unique)

 //Add 10% tax to each products
let add_tax =_.map(products, (e) => {
  return {
    name: e.name,
    price: Math.flo(e.price * 1.1),
    isbn: e.isbn
  }
})
console.log('Price_Plus_Tax', add_tax)

 //Calculate total price of all products
let total = _.sumBy(products,'price')
console.log('total', total)
