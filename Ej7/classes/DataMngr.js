class DataMngr{
    readline;
    colorMngr;
    com;

    constructor(_readline, _colorMngr, _com){
        this.readline = _readline;
        this.colorMngr = _colorMngr;
        this.com = _com;
    }
    
    askPlayersFromUser(){
        let players = [];
        this.com.sendMsg(this.colorMngr.bgMagenta("=>> INTRODUCE LOS NOMBRES DE LOS JUGADORES <<="));
        this.com.sendMsg(this.colorMngr.bgYellow("Separalos por comas:"));
        const players1 = this.readline.question("").split(",");
        players = players1.map(str => str.trim());
        return players;
    }

    askPlayerResp(){
        return this.readline.question("");
    }

    askPlayAgain(){
        let again = true;
        this.com.sendMsg(this.colorMngr.bgMagenta("\n¿Otra partida? (n/Enter para salir):"));
        again = this.readline.question("");
        if(again == "n") again = false;
        return again;

    }
}

export default DataMngr;