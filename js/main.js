const yellow1 = '<button onclick="hitPlayer(2)"><img src="media/img/yellowhero-on.jpg" alt="Héroe Amarillo"></button>'
const blue1 = '<button onclick="hitPlayer(2)"><img src="media/img/bluehero-on.jpg" alt="Héroe Azul"></button>'
const red1 = '<button onclick="hitPlayer(2)"><img src="media/img/redhero-on.jpg" alt="Héroe Rojo"></button>'
const pink1 = '<button onclick="hitPlayer(2)"><img src="media/img/pinkhero-on.jpg" alt="Héroe Rosa"></button>'

const yellow2 = '<button onclick="hitPlayer(1)"><img src="media/img/yellowhero-on.jpg" alt="Héroe Amarillo"></button>'
const blue2 = '<button onclick="hitPlayer(1)"><img src="media/img/bluehero-on.jpg" alt="Héroe Azul"></button>'
const red2 = '<button onclick="hitPlayer(1)"><img src="media/img/redhero-on.jpg" alt="Héroe Rojo"></button>'
const pink2 = '<button onclick="hitPlayer(1)"><img src="media/img/pinkhero-on.jpg" alt="Héroe Rosa"></button>'

const chooseFighter1 = (player) => {

    console.log('parametro ', player)

    switch(player) {
        case "yellow1":
            document.getElementById("player1").innerHTML = yellow1
            break
        case "blue1":
            document.getElementById("player1").innerHTML = blue1
            break
        case "red1":
            document.getElementById("player1").innerHTML = red1
            break
        case "pink1":
            document.getElementById("player1").innerHTML = pink1
            break        
    }
}

const chooseFighter2 = (player) => {

    console.log('parametro ', player)

    switch(player) {
        case "yellow2":
            document.getElementById("player2").innerHTML = yellow2
            break
        case "blue2":
            document.getElementById("player2").innerHTML = blue2
            break
        case "red2":
            document.getElementById("player2").innerHTML = red2
            break
        case "pink2":
            document.getElementById("player2").innerHTML = pink2
            break        
    }
}

const chooser1 = document.getElementById("playerChooser1")
const chooser2 = document.getElementById("playerChooser2")
const chooserTotal = document.getElementById ("playerChooser")

let doneClicks = 0

let clickedButtons = document.getElementsByClassName("character")

let incrementoClick = () => {

    doneClicks += 1

    if(doneClicks == 1){
        console.log("hemos hecho click!!!!")
        chooser1.style.display = "none"
        chooser2.style.display = "block"
    }

    if(doneClicks == 2){
        console.log("hemos hecho dos clicks!!!!")
        chooserTotal.style.display = "none"
    }

}

clickedButtons[0].addEventListener("click", incrementoClick)
clickedButtons[1].addEventListener("click", incrementoClick)
clickedButtons[2].addEventListener("click", incrementoClick)
clickedButtons[3].addEventListener("click", incrementoClick)
clickedButtons[4].addEventListener("click", incrementoClick)
clickedButtons[5].addEventListener("click", incrementoClick)
clickedButtons[6].addEventListener("click", incrementoClick)
clickedButtons[7].addEventListener("click", incrementoClick)

//

let playerLife1 = 10 
let playerLife2 = 10
let hitPlayer = (fighter) => {
    switch(fighter) {
        case 1:
            console.log("golpea el jugador 2 al jugador 1")
            playerLife1 -= 1
            console.log(playerLife1)
            if (playerLife1 == 0){
                console.log("Fin del juego, gana el jugador 2.")
            }
        break
        case 2:
            console.log("golpea el jugador 1 al jugador 2")
            playerLife2 -= 1
            console.log(playerLife2)
            if (playerLife2 == 0){
                console.log("Fin del juego, gana el jugador 1.")
            }
        break
    }
}