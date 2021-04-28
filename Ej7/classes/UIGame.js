class UIGame{
    welcome(_name){
        console.log(`Antes de empezar el juego: **=> ${_name} <=**`);
    }

    showGameName(_name){
        return this.name;
    }

    showInfoMenu(_name){
        process.stdout.write("\u001b[2J\u001b[0;0H");
        console.log("*********************");
        console.log("*", _name);
        console.log("*********************");
        console.log("=> Intenta adivinar si el número será par o impar <=\n");
    }

    showTurn(_player){
        console.log(`***** => Turno de: ${_player}`);
    }

    showPlayersResponse(_playersResponse, _result){
        console.log(`** =>> El reusltado es: ${_result} <<= **`);
        for (let [player, resp] of _playersResponse.entries()) {
            console.log("Respuesta de ", player, resp)
            if(resp === _result){
                console.log("Correcta!");
            }
        }
    }

    showPlayers(_players){
        let i = 0
        console.log("=>> Jugadores inscritos <<=")
        _players.forEach(player =>{
            i++;
            console.log(`Jugador${i}: ${player}`);
        });
    }

    showScores(_playersScore){
        _playersScore.array.forEach(playerScore => {
            console.log(playerScore);
        });
    }

    showThinking(){
        console.log("Generando número aleatorio...");
    }
}

export default UIGame;