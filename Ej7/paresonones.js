/*
    Importación del módulo de configuración
*/

import paresonones from "./Config.js";

function gameInit(){
    /* 
        Declaración e instanciación de objetos
    */

    const colorMngr = paresonones.chalk;
    const readline = paresonones.readline;
    const game = new paresonones.Game("Pares o Nones");
    const playersMngr = new paresonones.PlayersMngr();
    const scoreBoard = new paresonones.Scoreboard();
    const com = new paresonones.Com();
    const uiGame = new paresonones.UIGame(colorMngr, com);
    const dataMngr = new paresonones.DataMngr(readline, colorMngr, com);
    const Utils = new paresonones.Utils();

    /*
        *** Inicio de la lógica de Control ***
    */

    // Cabecera del juego
    uiGame.showHeader(game.getGameName());
    
    // Solicitud de introducción de los nombres de los jugadores
    // Creación de los objetos jugadores y añadirlos al gestor de jugadores 
    // y al tablero de puntuaciones
    
    let counter = 1;
    dataMngr.askPlayersFromUser().forEach(_player => {
        const player = new paresonones.Player(counter - 1, _player);
        playersMngr.setNewPlayer(player);
        scoreBoard.setPlayer(player.id, 0);
        counter++;
    });

    /*
        Bucle principal
    */

    do{
        // Cabecera del juego
        uiGame.showHeader(game.getGameName());

        // Resumen de los jugadores inscritos
        uiGame.showPlayersResume();
        let i = 1;
        playersMngr.getPlayers().forEach(player =>{
            uiGame.showPlayerIndex(i); 
            uiGame.showPlayer(player);
            i++;
        });

        // Creación del número aleatorio y guardado el resultado
        game.setGameResult(Utils.generateRandomNumber());

        // Inicio de los turnos de jugadores con sus respuestas
        playersMngr.getPlayers().forEach(player => {
            uiGame.showTurn(player.name);
            uiGame.showAskQuestion();
            game.setPlayerResponse(player.name, dataMngr.askPlayerResp());
        });

        // Resumen de las respuestas
        uiGame.showHeader(game.getGameName());
        uiGame.showGameResult(game.getResultText());

        playersMngr.getPlayers().forEach(player => {
            uiGame.showPlayerResponse(player.name, game.getPlayerResponseText().get(player.name), game.checkPlayerResponse(game.getPlayerResponseText().get(player.name)));
            scoreBoard.setPlayerScore(player.id, Number.parseInt(game.getPlayerResponseNumber(player.name),10));
        });
        
        // Muestra los puntos de cada jugador
        uiGame.showScoreResume();
        playersMngr.getPlayers().forEach(player =>{
            uiGame.showScores(player.name, scoreBoard.getPlayerScore(player.id));
        });
        
    
    // Menú para poder jugar de nuevo o salir del juego
    }while(dataMngr.askPlayAgain());
}

gameInit();