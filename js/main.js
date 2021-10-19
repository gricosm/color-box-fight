// Defino las nodos generales que usaré el juego.
// defino nodos los nodos me ayudan a interactuar con el html (pintar escribir )

// class Character {
//     constructor(characterName, characterHealth, characterAttack, characterImg){
//         this.characterName = characterName
//         this.characterHealth = characterHealth
//         this.characterAttack = characterAttack
//         this.characterImg = characterImg 
//     }
// }

// class Player extends Character{
//     constructor(playerName) {
//         super(characterName, characterHealth, characterAttack, characterImg, playerName)
//         this.playerName = playerName
//     } 
// }

// const playerOne = new Player ()
// const playerTwo = new Player ()

// const pinkHero = new Character ("Pink", 10, 3, '<img src="media/img/pinkhero-on.jpg" alt="Héroe Rosa">')
// const yellowHero = new Character ("Yellow", 15, 2, '<img src="media/img/yellowhero-on.jpg" alt="Héroe Amarillo">')
// const redHero = new Character ("Red", 12, 2, '<img src="media/img/redhero-on.jpg" alt="Héroe Rojo">')
// const blueHero = new Character ("Blue", 7, 4, '<img src="media/img/bluehero-on.jpg" alt="Héroe Azul">')

// let selectCharacter = (heroName) => {
//     switch (heroName) {
//         case 'yellowHero':
//             console.log('Elijo el héroe Amarillo.')
//         break
//         case 'blueHero':
//             console.log('Elijo el héroe Azul.')
//         break
//         case 'redHero':
//             console.log('Elijo el héroe Rojo.')
//         break
//         case 'pinkHero':
//             console.log('Elijo el héroe Rosa.')
//         break      
//     }
// }

//Necesito que las siguientes variables apunten a los datos definidos en las clases de cada personaje. Que a su vez, asumen los jugadores al seleccionarlos.

let playerOneHealth
let playerTwoHealth 

let playerOneAttack = () => {
    playerTwoHealth = playerTwoHealth - playerOneAttack
    return playerTwoHealth
}

let playerTwoAttack = () => {
    playerOneHealth = playerOneHealth - playerTwoAttack
    return playerOneHealth
}

if (playerOneHealth = 0) {
    console.log('Gana Jugador 1.')
}

if (playerTwoHealth = 0){
    console.log('Gana Jugador 2.')
}











//Jugador 1 y Jugador 2 eligen, los personajes elegidos se pintan en pantalla.

// class Player {
//     constructor(playerName, character) {
//         this.player = playerName
//         this.character = character
//     }
// }