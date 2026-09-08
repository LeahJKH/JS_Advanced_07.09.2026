let userData = JSON.parse(sessionStorage.getItem("loggedInUser")) // get info back into object save variable

const welcomeHeading = document.querySelector("#welcomeMsg")

welcomeHeading.innerText = `Welcome ${userData.username}!`


const gameCont = document.querySelector("#gameContainer")
const gameForm = document.querySelector("#gameForm")

gameForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const formData = new FormData(gameForm) 
    const data = Object.fromEntries(formData.entries()) 

    console.log(data)
})