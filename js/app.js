const formOne = document.querySelector("#form");

formOne.addEventListener("submit", (e) => {
    e.preventDefault(); // fjerner default funksjoner

    const formData = new FormData(formOne) // lagere form data til js

    const data = Object.fromEntries(formData.entries()) // gjør hver input til et object

    // data
    // username: "input value"
    // password: "input value"

    // JSON. Javascript object notation
    // json alltid array eller object

    localStorage.setItem("user", JSON.stringify(data)) // lagre object til local storage

    let userData = JSON.parse(localStorage.getItem("user")) // get info back into object save variable

    console.log(userData)
    
    console.log(data.username)
})



