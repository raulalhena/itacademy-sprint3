class PlayersMngr{
    players = [];

    constructor(_name){
        if(PlayersMngr._instance && this.name == _name){
            console.log("Err: El gestor de usuarios ya está iniciado.");
        }
        PlayersMngr._instance = this;
        this.name = _name;
    }

    setNewPlayer(_playerName){
        this.players.push(_playerName);
    }

    getPlayers(){
        return this.players;
    }
}

export default PlayersMngr;