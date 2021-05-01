/*
    Clase UIGame. Encargada de crear la interfaz gráfica del juego
*/

class UIGame{
    colorMngr;
    com;
    respTypes = new Map();

    // Recibe el gestor de color y el objeto _com para enviar mensajes al usuario,
    // en este caso por console log, pero es transaprente para esta clase.
    // Setea el objeto Map respTypes con los diferentes tipos de respuesta posibles.
    constructor(_colorMngr, _com){
        this.colorMngr = _colorMngr;
        this.com = _com;
        this.respTypes.set(2, "Correcta");
        this.respTypes.set(0, "Incorrecta");
    }

    // Muestra el nombre del juego que obtiene de la clase Game
    showGameName(_name){
        return this.name;
    }

    // Muestra la cabecera del juego con el nombre del mismo
    showHeader(_name){
        process.stdout.write("\u001b[2J\u001b[0;0H");
        this.com.sendMsg(this.colorMngr.green("*********************"));
        this.com.sendMsg(this.colorMngr.green("*", _name));
        this.com.sendMsg(this.colorMngr.green("*********************"));
    }

    // Muestra el turno del player correspondiente
    showTurn(_player){
        this.com.sendMsg(this.colorMngr.bgMagenta(`***** => Turno de: ${this.colorMngr.bgMagenta(_player)}`));
    }

    // Muestra el resultado del juego: PAR o IMPAR que recibe de la clase Game
    showGameResult(_result){
        this.com.sendMsg(this.colorMngr.bgMagenta(`\n** =>> EL RESULTADO ES: ${_result.toUpperCase()} <<= **\n`));
    }

    // Muestra el nombre del player
    showPlayer(_player){
        this.com.sendMsg(this.colorMngr.bgGreen(_player.name));
    }

    // Muestra la puntuación del usuario
    showScores(_playerName, _score){
        this.com.sendMsg(`Puntuacion ${_playerName}: ${_score}`);
    }

    // Muestra titulo de la sección de los jugadores inscritos en el juego
    showPlayersResume(){
        this.com.sendMsg(this.colorMngr.bgMagenta("=>> JUGADORES INSCRITOS <<="));
    }

    // Muestra el número de jugador que le corresponde a cada uno
    showPlayerIndex(_index){
        this.com.sendMsg(`Jugador${_index}:`);
    }

    // Muestra la respuesta dada por un usuario concreto, y si es Correcto o Incorrecta
    showPlayerResponse(_playerName, _resp, _respType){
        this.com.sendMsg(`Respuesta de: ${this.colorMngr.bgGreen(_playerName)} es ${this.colorMngr.bgBlue(_resp)}`);
        this.com.sendMsg(this.colorMngr.bgYellow(this.respTypes.get(_respType)));
    }

    // Muestra título del resumen de la puntuación
    showScoreResume(){
        this.com.sendMsg(this.colorMngr.bgMagenta('\n** ! RESUMEN DE PUNTUACION ! **'));
    }

    // Muestra la solicitud de los nombres de jugadores al usuario
    showPlayersNameQuestion(){
        this.com.sendMsg(this.colorMngr.bgMagenta("=>> INTRODUCE LOS NOMBRES DE LOS JUGADORES <<="));
        this.com.sendMsg(this.colorMngr.bgYellow("Separalos por comas:"));
    }

    // Muestra la pregunta de volver a jugar o salir del juego
    showPlayAgainQuestion(){
        this.com.sendMsg(this.colorMngr.bgMagenta("\n¿Otra partida? (n/Enter para salir):"));
    }

    // Muestra frase y puntos que se reproducen en forma de barra de progreso.
    // Para dar mas sensación de creación de la respuesta. NO implementado
    showThinking(){
        this.com.sendMsg(this.colorMngr.bgYellow("\nGenerando número aleatorio..."));
    }

    // Muestra pregunta para que elija el player: PAR o IMPAR
    showAskQuestion(){
        this.com.sendMsg(this.colorMngr.green("¿Par o impar?"));
    }

    // Introduce nuevos tipos de respuestas a parte de la Correcta o Incorrecta
    setResponseTypes(_respType){
        this.respTypes.set(_respType);
    }
}

export default UIGame;