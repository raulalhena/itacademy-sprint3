class DataMngr{
    readline;

    constructor(_readline){
        this.readline = _readline;
    }
    
    getPlayersFromUser(){
        let players = [];
        
        const players1 = this.readline.question("Introduce el nombre de los jugadores separados por comas: \n").split(",");
        players = players1.map(str => str.trim());
        return players;
    }

    getPlayerResp(){
        return this.readline.question("¿Par o impar? :)\n");
    }
}

export default DataMngr;