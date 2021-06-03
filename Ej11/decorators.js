const fs = require('fs');
const file = fs.readFileSync('./currency_conversions.json');

const product = function(_price){
    this.price = _price;

    this.getPrice = () => {
        return this.price;
    }
}

const decoratedProduct = function(_product, _currency){
    this.product = _product;
    this.currency = _currency;

    this.getPrice = () => {
        this.coeficient = JSON.parse(file);
        return this.coeficient[this.currency + '_EUR'] * this.product.getPrice();
    }
}

module.exports = {
    product,
    decoratedProduct
};