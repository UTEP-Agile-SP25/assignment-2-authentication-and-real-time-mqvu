import {signUp} from "./auth"
import {logout} from "./auth"
import {login} from "./auth"


const sigUpForm = document.querySelector("#signupForm")
sigUpForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    const firstname = document.getElementById("FirstName").value
    const lastname = document.getElementById("lastName").value
    const email = document.getElementById("signupEmail").value
    const password = document.getElementById("signupPassword").value

    signUp(firstname, lastname, email, password)

})

const logOutForm = document.querySelector("#LogoutForm")
logOutForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    logout()
})

const loginForm = document.querySelector("#loginForm")
loginForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    const email = document.getElementById("loginEmail").value
    const password = document.getElementById("loginPassword").value
    login(email, password)
})