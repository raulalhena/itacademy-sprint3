class DataMngr{
    readline;
    colorMngr;

    constructor(_readline, _colorMngr){
        this.readline = _readline;
        this.colorMngr = _colorMngr
    }
    
    getPlayersFromUser(){
        let players = [];
        
        const players1 = this.readline.question(this.colorMngr.bgYellow("Separalos por comas: \n")).split(",");
        players = players1.map(str => str.trim());
        return players;
    }

    getPlayerResp(){
        return this.readline.question("");
    }

    getPlayAgain(){
        let again = true;
        again = this.readline.question(this.colorMngr.bgMagenta("\n¿Otra partida? (n/Enter para salir):\n"));
        if(again == "n") again = false;
        return again;

    }
}

export default DataMngr;