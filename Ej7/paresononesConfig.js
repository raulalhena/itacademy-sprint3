/*
    Clases del juego
*/

import Game from "./classes/Game.js";
import PlayersMngr from "./classes/PlayersMngr.js";
import Scoreboard from "./classes/Scoreboard.js";
import Player from "./classes/Player.js";
import Com from "./classes/Com.js";
import DataMngr from "./classes/DataMngr.js";
import UIGame from "./classes/UIGame.js";

/*
    Clases de utilidad
*/

import readline from "readline-sync";
import chalk from "chalk";


export default { 
    Game,
    Scoreboard,
    PlayersMngr,
    Player,
    Com,
    DataMngr,
    UIGame,
    readline,
    chalk
};