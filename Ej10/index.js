/*
** Nivel1 Operaciones y middlewares
*/

const fs = require('fs');
const jfile = fs.readFileSync('./data.json');
const Middleware = require('./Middleware.js');

const add = function(a, b){
    res = a + b;
    cmd(res);
    return res;
}

const sub = function(a, b){
    res = a - b;
    cmd(res);
    return res;
}

const mult = function(a, b){
    res = a * b;
    cmd(res);
    return res;
}

const getData = function(jfile){
    return JSON.parse(jfile);
}

const data = getData(jfile);

const cmd = function(res){
    md = new Middleware();
    md.square(res);
    md.cub(res);
    md.division(res);
}

console.log("Suma: ", add(data.a, data.b));
console.log("Resta: ", sub(data.a, data.b));
console.log("Multiplicación: ", mult(data.a, data.b));