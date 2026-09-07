let userData = JSON.parse(sessionStorage.getItem("loggedInUser")) // get info back into object save variable

const welcomeHeading = document.querySelector("#welcomeMsg")

welcomeHeading.innerText = `Welcome ${userData.username}!`