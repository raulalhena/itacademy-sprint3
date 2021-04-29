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
    const uiGame = new paresonones.UIGame(colorMngr);
    const dataMngr = new paresonones.DataMngr(readline, colorMngr);

    /*
        *** Inicio de la lógica de Control ***
    */

    // Cabecera del juego
    uiGame.showHeader(game.getGameName());
    
    // Solicitud de introducción de los nombres de los jugadores
    // Creación de los objetos jugadores y añadirlos al gestor de jugadores 
    // y al tablero de puntuaciones
    
    com.sendMsg(colorMngr.bgMagenta("=>> INTRODUCE LOS NOMBRES DE LOS JUGADORES <<="));
    let counter = 1;
    dataMngr.getPlayersFromUser(readline).forEach(_player => {
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
        com.sendMsg(colorMngr.bgMagenta("=>> JUGADORES INSCRITOS <<="));
        let i = 1;
        playersMngr.getPlayers().forEach(player =>{
            com.sendMsg(`Jugador${i}:`);
            uiGame.showPlayer(player);
            i++;
        });

        // Creación del número aleatorio
        const randomResult = game.getResult();

        // Inicio de los turnos de jugadores con sus respuestas
        playersMngr.getPlayers().forEach(player => {
            uiGame.showTurn(player.name);
            com.sendMsg(colorMngr.green("¿Par o impar?"));
            const playerResponse = dataMngr.getPlayerResp();
            game.setPlayerResponse(player, playerResponse);

            let points = 0;
            if(randomResult == playerResponse) points = 1;
            scoreBoard.setScore(player.id, Number.parseInt(points,10));
        });

        // Resumen de las respuestas
        uiGame.showHeader(game.getGameName());
        uiGame.showPlayersResponse(game.getPlayersResponse(), randomResult);
        
        // Muestra los puntos de cada jugador
        com.sendMsg(colorMngr.bgMagenta('\n** ! RESUMEN DE PUNTUACION ! **'));
        playersMngr.getPlayers().forEach(player =>{
            uiGame.showScores(player.name, scoreBoard.getPlayerScore(player.id));
        });
        
    
    // Menú para poder jugar de nuevo o salir del juego
    }while(dataMngr.getPlayAgain());
}

gameInit();