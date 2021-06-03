const { product, decoratedProduct } = require('./decorators');

const currency = 'CNY';
const prod1 = new product(10);
const decorProdu1 = new decoratedProduct(prod1, currency);

console.log('Precio del producto: ', prod1.getPrice());
console.log('Precio del producto en EUR: ', decorProdu1.getPrice());