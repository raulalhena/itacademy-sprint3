/*
    Clase Socreboard. Gestión de los puntos que tiene cada player. Clase Singleton
*/

class Scoreboard{
    playersScore = [];

    // Comprueba la instaciación de la clase.
    constructor(){
        if(Scoreboard._instance){
            return Scoreboard._instance;
        }
        Scoreboard._instance = this;
    }

    // Guarda el valor de los puntos en un array, usando el id del objeto player
    // como indice del array
    setPlayer(_playerId, _score){
        this.playersScore[_playerId] = _score;
    }

    // Modifica el valor de cada posicion del array con los puntos obtenidos
    // por el player y usando el id del player como indice
    setPlayerScore(_playerId, _score){
        this.playersScore[_playerId] = Number.parseInt(this.playersScore[_playerId],10) + Number.parseInt(_score,10);
    }

    // Devuelve los puntos que tiene el player
    getPlayerScore(_playerId){
        return this.playersScore[_playerId];
    }
}

export default Scoreboard;