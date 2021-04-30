class Game{
    playersResponse = new Map();
    respType = new Map();
    result;

    constructor(_name){
        if(Game._instance && this.name == _name){
            console.log(`El juego: ${_name} ya está iniciado`);
        }
        Game._instance = this;
        this.name = _name;
        this.respType.set("Correcta", 2);
        this.respType.set("Incorrecta", 0);
    }

    getGameName(){
        return this.name;
    }

    setPlayerResponse(_playerName, _resp,){
        this.playersResponse.set(_playerName, _resp);
    }

    getPlayerResponseText(){
        return this.playersResponse;
    }

    getPlayerResponseNumber(_playerName){
        return this.checkPlayerResponse(this.playersResponse.get(_playerName));
    }

    setGameResult(_result){
        if(_result % 2 == 0) {
            this.result = "par";
        }else{
            this.result = "impar";
        }
    }

    getResultText(){
        return this.result;
    }

    getResultNumber(){
        return this.respType.get(this.result);
    }

    checkPlayerResponse(_resp){
        if(_resp == this.result){
            return this.respType.get("Correcta");
        }else{
            return this.respType.get("Incorrecta");
        }
        
    }
}

export default Game;