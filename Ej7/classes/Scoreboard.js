class Scoreboard{
    playersScore = new Map();

    constructor(){
        if(Scoreboard._instance){
            return Scoreboard._instance;
        }
        Scoreboard._instance = this;
    }

    setScore(_playerName, _score){
        this.playersScore.set(_playerName, this.playersScore.get(_playerName) + _score);
    }

    getPlayersScore(_playerName){
        return this.playersScore;
    }
}

export default Scoreboard;