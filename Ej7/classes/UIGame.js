class UIGame{
    colorMngr;

    constructor(_colorMngr){
        this.colorMngr = _colorMngr;
    }

    welcome(_name){
        console.log(this.colorMngr.green(`Antes de empezar el juego: **=> ${this.colorMngr.red(_name)} <=**`));
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
            console.log("Respuesta de:", this.colorMngr.bgGreen(player), this.colorMngr.bgBlue(resp));
            if(resp === _result){
                console.log(this.colorMngr.bgRed("Correcta!"));
            }
        }
    }

    showPlayers(_players){
        let i = 0
        console.log(this.colorMngr.bgMagenta("=>> Jugadores inscritos <<="));
        _players.forEach(player =>{
            i++;
            console.log(`Jugador${i}: ${this.colorMngr.bgGreen(player)}`);
        });
        console.log("\n");
    }

    showScores(_playersScore){
        for(let score of _playersScore.values()){
            console.log("Puntuacion: ", score);
        }
    }

    showThinking(){
        console.log(this.colorMngr.bgYellow("\nGenerando número aleatorio..."));
    }
}

export default UIGame;