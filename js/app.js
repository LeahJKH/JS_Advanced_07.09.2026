const formOne = document.querySelector("#form");

let userArray = [];

if(localStorage.getItem("user")) {
    console.log(true)
    let preUsers = JSON.parse(localStorage.getItem("user"))
    preUsers.forEach(e => {
        userArray.push(e)
    });
} else {
    console.log(false)
}

function checkLogin(username1, password1 ) {
    let allUser = JSON.parse(localStorage.getItem("user"))

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
    e.preventDefault(); 

    const formData = new FormData(formOne) 
    const data = Object.fromEntries(formData.entries()) 

    checkLogin(data.username, data.password) 
})

//

const signup = document.querySelector("#signup")
const userfield = document.querySelector("#usernamefield")
const passfield = document.querySelector("#passwordfield")


signup.addEventListener("click", (e) => {
let userNamevalue = userfield.value;
let userPassvalue = passfield.value

let fullUser = {
    username: userNamevalue,
    password: userPassvalue
}

userArray.push(fullUser)
localStorage.setItem("user", JSON.stringify(userArray))
})