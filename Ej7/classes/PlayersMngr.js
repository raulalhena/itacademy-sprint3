class PlayersMngr{
    players = [];

    constructor(_name){
        if(PlayersMngr._instance && this.name == _name){
            console.log("Err: El gestor de usuarios ya está iniciado.");
        }
        PlayersMngr._instance = this;
        this.name = _name;
    }

    setNewPlayer(_player){
        this.players.push({id: _player.id, name: _player.name});
    }

    getPlayers(){
        return this.players;
    }
}

export default PlayersMngr;