import paresonones from "./paresononesConfig.js";

const game = new paresonones.Game("Pares o Nones");
const playersMngr = new paresonones.PlayersMngr();
const scoreBoard = new paresonones.Scoreboard();
const com = new paresonones.Com();
const uiGame = new paresonones.UIGame();
const readline = paresonones.readline;
const dataMngr = new paresonones.DataMngr(readline);

uiGame.welcome(game.getGameName());
const arr = dataMngr.getPlayersFromUser(readline);
arr.forEach(player => {
    playersMngr.setNewPlayer(player);
});

uiGame.showInfoMenu(game.getGameName());
uiGame.showPlayers(playersMngr.getPlayers());

playersMngr.getPlayers().forEach(player => {
    uiGame.showTurn(player);
    game.setPlayerResponse(player, dataMngr.getPlayerResp());
});

const resp = game.getResult()
uiGame.showThinking();
uiGame.showPlayersResponse(game.getPlayersResponse(), resp);




