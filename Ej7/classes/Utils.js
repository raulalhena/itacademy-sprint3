/*
    Clase Utils. Contiene funciones de utilidad, en este caso sólo la de
    generar un número aleatorio y pasarlo a entero entre 0 y 99
*/

class Utils{
    generateRandomNumber(){
        return Math.floor(Math.random() * (100 - 1)) + 1;
    }
}

export default Utils;