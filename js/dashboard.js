let userData = JSON.parse(sessionStorage.getItem("loggedInUser")) // get info back into object save variable

const welcomeHeading = document.querySelector("#welcomeMsg")

welcomeHeading.innerText = `Welcome ${userData.username}!`


const gameForm = document.querySelector("#gameForm")

gameForm.addEventListener("submit", (e) => {
    e.preventDefault();  // fjerne før funksjonalitet
    
    const formData = new FormData(gameForm) // lagrer form data til strings
    const data = Object.fromEntries(formData.entries()) // combinerer strings til object en etter en
    
    let gameArray = []
    
    if(localStorage.getItem("gameinfo")) { // sjekk om gameinfo existerer
        const allgames = JSON.parse(localStorage.getItem("gameinfo")) // hent info fra local storage
        allgames.forEach((game) => { // loop gjennom info på local storage
            gameArray.push(game)
        })
        gameArray.push(data)
    } else {
        console.log("her")
        gameArray.push(data)
    }
    
    console.log(gameArray)
    localStorage.setItem("gameinfo", JSON.stringify(gameArray)) 

})

const gameCont = document.querySelector("#gameContainer")

function createGameCards() {
const getGames = JSON.parse(localStorage.getItem("gameinfo")) // henter data

getGames.forEach((gameI) => {
    const containDiv = document.createElement("div")
    
    const gamenameP = document.createElement("p")
    const gametxt = document.createTextNode(gameI)

    const ratingP = document.createElement("p")
    const ratingtxt = document.createTextNode()

    const platformP = document.createElement("p")
    const platformtxt = document.createTextNode()

    const img = document.createElement("img")
    img.src = gameI.picture

})

}