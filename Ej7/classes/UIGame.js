class UIGame{
    colorMngr;

    constructor(_colorMngr){
        this.colorMngr = _colorMngr;
    }

    showGameName(_name){
        return this.name;
    }

    showHeader(_name){
        process.stdout.write("\u001b[2J\u001b[0;0H");
        console.log(this.colorMngr.green("*********************"));
        console.log(this.colorMngr.green("*", _name));
        console.log(this.colorMngr.green("*********************"));
    }

    showTurn(_player){
        console.log(this.colorMngr.bgMagenta(`***** => Turno de: ${this.colorMngr.bgMagenta(_player)}`));
    }

    showPlayersResponse(_playersResponse, _result){
        console.log(this.colorMngr.bgMagenta(`\n** =>> El resultado es: ${_result.toUpperCase()} <<= **\n`));
        for (let [player, resp] of _playersResponse.entries()) {
            console.log("Respuesta de:", this.colorMngr.bgGreen(player.name), this.colorMngr.bgBlue(resp));
            if(resp === _result){
                console.log(this.colorMngr.bgRed("Correcta!"));
            }
        }
    }

    showPlayer(_player){
        console.log(this.colorMngr.bgGreen(_player.name));
    }

    showScores(_playerName, _score){
        console.log(`Puntuacion ${_playerName}: ${_score}`);
    }

    showThinking(){
        console.log(this.colorMngr.bgYellow("\nGenerando número aleatorio..."));
    }
}

export default UIGame;