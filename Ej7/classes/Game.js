/*
    Clase Game. Contiene la lógica del juego. Classe Singleton
*/

class Game{
    playersResponse = new Map();
    respType = new Map();
    result;

    // Recibe el nombre del juego. Si ya se ha instanciado la clase da un mensaje de error
    constructor(_name){
        if(Game._instance && this.name == _name){
            console.log(`El juego: ${_name} ya está iniciado`);
        }
        Game._instance = this;
        this.name = _name;
        this.respType.set("Correcta", 2);
        this.respType.set("Incorrecta", 0);
    }

    // Devuelve el nombre del juego
    getGameName(){
        return this.name;
    }

    // Guarda en un Map() la respuesta facilitado por el player
    setPlayerResponse(_playerName, _resp,){
        this.playersResponse.set(_playerName, _resp);
    }

    // Devuelve la respuesta facilitada por el player en formato texto. Retorna el
    // objeto Map() que las contiene
    getPlayerResponseText(){
        return this.playersResponse;
    }

    // Devuelve la respuesta del usuario en formato numérico
    getPlayerResponseNumber(_playerName){
        return this.checkPlayerResponse(this.playersResponse.get(_playerName));
    }

    // Guarda como PAR o IMPAR el resultado de un número aleatorio que le pasa la clase Utils
    setGameResult(_result){
        if(_result % 2 == 0) {
            this.result = "par";
        }else{
            this.result = "impar";
        }
    }

    // Devuelve el resultado en formato string
    getResultText(){
        return this.result;
    }

    // Devuelve el resultado en formato número
    getResultNumber(){
        return this.respType.get(this.result);
    }

    // Comprueba si la respuesta facilitada por un player es correcta o incorrecta
    // y devuelve el valor numerico correspondientes a los puntos que ganará,
    // si es correcta: 2 si es incorrecta: 0
    checkPlayerResponse(_resp){
        if(_resp == this.result){
            return this.respType.get("Correcta");
        }else{
            return this.respType.get("Incorrecta");
        }
        
    }
}

export default Game;