class Scoreboard{
    playersScore = [];

    constructor(){
        if(Scoreboard._instance){
            return Scoreboard._instance;
        }
        Scoreboard._instance = this;
    }

    setPlayer(_playerId, _score){
        this.playersScore[_playerId] = _score;
    }

    setScore(_playerId, _score){
        this.playersScore[_playerId] = Number.parseInt(this.playersScore[_playerId],10) + Number.parseInt(_score,10);
    }

    getPlayerScore(_playerId){
        return this.playersScore[_playerId];
    }
}

export default Scoreboard;