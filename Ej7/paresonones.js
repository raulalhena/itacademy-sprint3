import paresonones from "./paresononesConfig.js";

const colorMngr = paresonones.chalk;
const readline = paresonones.readline;
const game = new paresonones.Game("Pares o Nones");
const playersMngr = new paresonones.PlayersMngr();
const scoreBoard = new paresonones.Scoreboard();
const com = new paresonones.Com();
const uiGame = new paresonones.UIGame(colorMngr);
const dataMngr = new paresonones.DataMngr(readline, colorMngr);


uiGame.showHeader(game.getGameName());
const arr = dataMngr.getPlayersFromUser(readline);
arr.forEach(player => {
    playersMngr.setNewPlayer(player);
});

do{
    uiGame.showHeader(game.getGameName());
    uiGame.showPlayers(playersMngr.getPlayers());
    const result = game.getResult();

    playersMngr.getPlayers().forEach(player => {
        uiGame.showTurn(player);
        const playerResponse = dataMngr.getPlayerResp();
        game.setPlayerResponse(player, playerResponse);

        let points = 0;
        if(result == playerResponse) points = 1;
        scoreBoard.setScore(player, points);
    });

    uiGame.showPlayersResponse(game.getPlayersResponse(), result);
    uiGame.showScores(scoreBoard.getPlayersScore());

}while(dataMngr.getPlayAgain());
