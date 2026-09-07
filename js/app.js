const formOne = document.querySelector("#form");

let userArray = [];



if(localStorage.getItem("user")) {
    console.log(true)
    let preUsers = JSON.parse(localStorage.getItem("user"))
    preUsers.forEach(e => {
        userArray.push(e)
    });

    // window.location.href = "/pages/dashboard.html" auto logger in
} else {
    console.log(false)

}

// localStorage.clear() // tømmer all localstorage

// localStorage.removeItem("user") // fjerner kun "user"

function checkLogin(username1, password1 ) {
    let allUser = JSON.parse(localStorage.getItem("user"))
    console.log(username1, password1)

    allUser.forEach((e) => {
        if (e.username === username1 && e.password === password1) {
            const loggedUser = {
                username: e.username,
                password: e.password
            }
            sessionStorage.setItem("loggedInUser", JSON.stringify(loggedUser)) // saves if logged in
            console.log("matched!")
            window.location.href = "./pages/dashboard.html"
        } else {
            console.log ("didnt match")
        }
    })
}

formOne.addEventListener("submit", (e) => {
    e.preventDefault(); // fjerner default funksjoner

    const formData = new FormData(formOne) // lagere form data til js

    const data = Object.fromEntries(formData.entries()) // gjør hver input til et object

    // data
    // username: "input value"
    // password: "input value"

    // JSON. Javascript object notation
    // json alltid array eller object

    // userArray.push(data)

    // localStorage.setItem("user", JSON.stringify(userArray)) // lagre object til local storage

    let userData = JSON.parse(localStorage.getItem("user")) // get info back into object save variable

    checkLogin(data.username, data.password) // sends info from form
    // console.log(userData)
    
    // console.log(data.username)

    // window.location.href = "/pages/dashboard.html"
})



