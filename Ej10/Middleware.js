

class Middleware{
    square(a){
        console.log("El cuadrado es: ", Math.pow(a, 2));
    }

    cub(a){
        console.log("El cubo es: ", Math.pow(a, 3));
    }

    division(a){
        if(a != 0){
             console.log("La división entre 2 es: ", a/2);
        }else{
            console.log("No se puede dividir 0");
        }
    }
}

module.exports = Middleware;