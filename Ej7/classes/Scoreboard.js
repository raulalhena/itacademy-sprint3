class Scoreboard{
    playersScore = new Map();

    constructor(){
        if(Scoreboard._instance){
            return Scoreboard._instance;
        }
        Scoreboard._instance = this;
    }

    setScore(playerName, score){
        this.playersScore.set(playerName, score);
    }
}

export default Scoreboard;