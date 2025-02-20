let message = document.querySelector(".message")
let input = document.querySelector(".input")
let bouton = document.querySelector(".bouton")
let form = document.querySelector(".form")
let link = document.querySelector(".link")

const Nombresecret = Math.floor(Math.random() *10)
let nombredessais = 5

bouton.addEventListener("click", (e) => {
    const input = document.querySelector(".input")
    if (input.value != "") {
        if (input.value < Nombresecret ) {
            message.textContent = "Le nombre est plus grand que " + input.value + " ."
            message.style.color = "red"
            
        } else if (input.value > Nombresecret) {
            message.textContent = "Le nombre est plus petit que " + input.value + " ."
            message.style.color = "red"     
        }
        if (nombredessais == 0) {
            message.textContent = "Vous avez perdu. La bonne réponse est " + Nombresecret + " ."
            message.style.color = "red"
            form.style.visibly = "hidden"
            link.style.visibly = "visible"
        }
        nombredessais--
        if (input.value == Nombresecret) {
            message.textContent = "Bravo, vous avez gagné. Le nombre exact est " + Nombresecret + " ."
            message.style.color = "green"
            form.style.display = "none"
            link.style.display = "flex"  
        }
        
    } else {
        message.textContent = "Veuillez saisir un nombre."
        message.style.color = "blue"
    }
})
