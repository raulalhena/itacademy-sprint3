/*
    Clase DataMngr. Control de las entradas de datos por parte del usuario
*/

class DataMngr{
    readline;
    colorMngr;

    // Constructor: recibe el objeto para leer de oncosla y gestion del color
    constructor(_readline, _colorMngr){
        this.readline = _readline;
        this.colorMngr = _colorMngr;
        this.com = _com;
    }
    
    // Obtiene los nombres de los players separados por comas y los añade a un array
    askPlayersFromUser(){
        let players = [];
        const players1 = this.readline.question("").split(",");
        players = players1.map(str => str.trim());
        return players;
    }

    // Obtiene la respuesta: par o impar
    askPlayerResp(){
        return this.readline.question("");
    }

    // Obtiene si el usuario quiere jugar otra vez o salir del juego
    askPlayAgain(){
        let again = true;
        again = this.readline.question("");
        if(again == "n") again = false;
        return again;

    }
}

export default DataMngr;