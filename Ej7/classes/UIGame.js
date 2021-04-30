class UIGame{
    colorMngr;
    com;
    respTypes = new Map();

    constructor(_colorMngr, _com){
        this.colorMngr = _colorMngr;
        this.com = _com;
        this.respTypes.set(2, "Correcta");
        this.respTypes.set(0, "Incorrecta");
    }

    showGameName(_name){
        return this.name;
    }

    showHeader(_name){
        process.stdout.write("\u001b[2J\u001b[0;0H");
        this.com.sendMsg(this.colorMngr.green("*********************"));
        this.com.sendMsg(this.colorMngr.green("*", _name));
        this.com.sendMsg(this.colorMngr.green("*********************"));
    }

    showTurn(_player){
        this.com.sendMsg(this.colorMngr.bgMagenta(`***** => Turno de: ${this.colorMngr.bgMagenta(_player)}`));
    }

    showGameResult(_result){
        this.com.sendMsg(this.colorMngr.bgMagenta(`\n** =>> EL RESULTADO ES: ${_result.toUpperCase()} <<= **\n`));
    }

    showPlayer(_player){
        this.com.sendMsg(this.colorMngr.bgGreen(_player.name));
    }

    showScores(_playerName, _score){
        this.com.sendMsg(`Puntuacion ${_playerName}: ${_score}`);
    }

    showPlayersResume(){
        this.com.sendMsg(this.colorMngr.bgMagenta("=>> JUGADORES INSCRITOS <<="));
    }

    showPlayerResponse(_playerName, _resp, _respType){
        this.com.sendMsg(`Respuesta de: ${this.colorMngr.bgGreen(_playerName)} es ${this.colorMngr.bgBlue(_resp)}`);
        this.com.sendMsg(this.colorMngr.bgYellow(this.respTypes.get(_respType)));
    }
    showScoreResume(){
        this.com.sendMsg(this.colorMngr.bgMagenta('\n** ! RESUMEN DE PUNTUACION ! **'));
    }
    
    showPlayerIndex(_index){
        this.com.sendMsg(`Jugador${_index}:`);
    }

    showThinking(){
        this.com.sendMsg(this.colorMngr.bgYellow("\nGenerando número aleatorio..."));
    }

    showAskQuestion(){
        this.com.sendMsg(this.colorMngr.green("¿Par o impar?"));
    }

    setResponseTypes(_respType){
        this.respTypes.set(_respType);
    }
}

export default UIGame;