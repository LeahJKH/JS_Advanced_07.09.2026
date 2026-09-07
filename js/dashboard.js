let userData = JSON.parse(localStorage.getItem("user")) // get info back into object save variable

const welcomeHeading = document.querySelector("#welcomeMsg")

welcomeHeading.innerText = `Welcome ${userData.username}!`