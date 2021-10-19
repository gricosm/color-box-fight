// Defino las clases generales que usaré el juego.
// Clase Character se ocupará de definir a los personajes del juego.

class Character {
    constructor(characterName, characterHealth, characterAttack){
        this.characterName = characterName
        this.characterHealth = characterHealth
        this.characterAttack = characterAttack
    }
}

const pinkHero = new Character ("Pink", 10, 3)
const yellowHero = new Character ("Yellow", 15, 2)
const redHero = new Character ("Red", 12, 2)
const blueHero = new Character ("Blue", 7, 4)



// class Player {
//     constructor(playerName, character) {
//         this.player = playerName
//         this.character = character
//     }
// }