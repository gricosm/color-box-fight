const yellow1 = '<button onclick="hitPlayer2"><img src="media/img/yellowhero-on.jpg" alt="Héroe Amarillo"></button>'
const blue1 = '<button onclick="hitPlayer2"><img src="media/img/bluehero-on.jpg" alt="Héroe Azul"></button>'
const red1 = '<button onclick="hitPlayer2"><img src="media/img/redhero-on.jpg" alt="Héroe Rojo"></button>'
const pink1 = '<button onclick="hitPlayer2"><img src="media/img/pinkhero-on.jpg" alt="Héroe Rosa"></button>'

const yellow2 = '<button onclick="hitPlayer1"><img src="media/img/yellowhero-on.jpg" alt="Héroe Amarillo"></button>'
const blue2 = '<button onclick="hitPlayer1"><img src="media/img/bluehero-on.jpg" alt="Héroe Azul"></button>'
const red2 = '<button onclick="hitPlayer1"><img src="media/img/redhero-on.jpg" alt="Héroe Rojo"></button>'
const pink2 = '<button onclick="hitPlayer1"><img src="media/img/pinkhero-on.jpg" alt="Héroe Rosa"></button>'

const chooseFighter1 = (player) => {

    console.log('parametro ', player)

    switch(player) {
        case "yellow":
            document.getElementById("player1").innerHTML = yellow
            break
        case "blue":
            document.getElementById("player1").innerHTML = blue
            break
        case "red":
            document.getElementById("player1").innerHTML = red
            break
        case "pink":
            document.getElementById("player1").innerHTML = pink
            break        
    }
}

const chooseFighter2 = (player) => {

    console.log('parametro ', player)

    switch(player) {
        case "yellow":
            document.getElementById("player2").innerHTML = yellow
            break
        case "blue":
            document.getElementById("player2").innerHTML = blue
            break
        case "red":
            document.getElementById("player2").innerHTML = red
            break
        case "pink":
            document.getElementById("player2").innerHTML = pink
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

const playerLife1 = 10
const playerLife2 = 10

let hitPlayer1 = () => playerLife1 -= 1
let hitPlayer2 = () => playerLife2 -= 1

if (playerLife1 == 0) {
    console.log("Gana el jugador 2.")
}