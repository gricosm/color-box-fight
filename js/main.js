const yellowFighter = '<button><img src="media/img/yellowhero-on.jpg" alt="Héroe Amarillo"></button>'
const blueFighter = '<button><img src="media/img/bluehero-on.jpg" alt="Héroe Azul"></button>'
const redFighter = '<button><img src="media/img/redhero-on.jpg" alt="Héroe Rojo"></button>'
const pinkFighter = '<button><img src="media/img/pinkhero-on.jpg" alt="Héroe Rosa"></button>'

const chooseFighter = (player) => {

    console.log('parametro ', player)
    
    switch(player) {
        case "yellowFighter":
            document.getElementById("playerFight").innerHTML = yellowFighter
            break
        case "blueFighter":
            document.getElementById("playerFight").innerHTML = blueFighter
            break
        case "redFighter":
            document.getElementById("playerFight").innerHTML = redFighter
            break
        case "pinkFighter":
            document.getElementById("playerFight").innerHTML = pinkFighter
            break        
    }
}

let doneClicks = 0
let clickedButtons = document.getElementsByClassName("character")

let incrementoClick = () => {

    doneClicks += 1
    
    if(doneClicks == 2){
        console.log("hemos hecho dos clicks!!!!")
    }

}

clickedButtons[0].addEventListener("click", incrementoClick)
clickedButtons[1].addEventListener("click", incrementoClick)


// 1. Saber los clicks que se hacen y parar cuando nº de clicks == 2
// 2. Dibujar dos diferentes:  ¿Marcar dos <div> en los que introducir los button para la segunda parte del juego?
// 3. Ocultar sección de elegir: modificar el HTML ¿borrando? lo que había y dibujando lo anterior (Aprovechar un if clicks == 2)