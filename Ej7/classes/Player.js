/*
    Clase Player. Contiene la información del juegdor
*/

class Player{
    id;
    name;

    // Obtiene el id que se la asigna por orden de inscripción 
    // y el nombre facilitado por el usuario
    constructor(_id, _name){
        this.id = _id;
        this.name = _name;
    }
}

export default Player;