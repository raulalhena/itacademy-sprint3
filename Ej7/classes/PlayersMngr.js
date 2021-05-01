/*
    Clase PlayerMngr. Gestión de los players del juego. Classe Singleton
*/

class PlayersMngr{
    players = [];

    // Instancia el objeto sólo si no está ya instanciado, si lo está muestra mensaje de error
    constructor(_name){
        if(PlayersMngr._instance && this.name == _name){
            console.log("Err: El gestor de usuarios ya está iniciado.");
        }
        PlayersMngr._instance = this;
        this.name = _name;
    }

    // Agrega el objeto player al arreglo players
    setNewPlayer(_player){
        this.players.push({id: _player.id, name: _player.name});
    }

    // Devuelve el array con todos los objetos Player
    getPlayers(){
        return this.players;
    }
}

export default PlayersMngr;