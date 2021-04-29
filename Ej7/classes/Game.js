class Game{
    playersResponse = new Map();
    resp;

    constructor(_name){
        if(Game._instance && this.name == _name){
            console.log(`El juego: ${_name} ya está iniciado`);
        }
        Game._instance = this;
        this.name = _name;
    }

    getGameName(){
        return this.name;
    }

    setPlayerResponse(_player, _resp,){
        this.playersResponse.set(_player, _resp);
    }

    getPlayersResponse(){
        return this.playersResponse;
    }

    getResult(){
        this.resp = Math.floor(Math.random() * (100 - 1)) + 1;
        if(this.resp % 2 == 0) {
            return "par";
        }else{
            return "impar";
        }
    }
}

export default Game;