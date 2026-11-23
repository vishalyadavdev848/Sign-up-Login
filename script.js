
// Select HTML elements
let signupForm = document.querySelector(".signup form");
let loginForm = document.querySelector(".login");

let loginBtn = document.getElementById("login2");
let signupBtn = document.getElementById("signup2");

let heading = document.getElementById("signup1");
let create = document.getElementById("create");

// Initially show Signup form
signupForm.style.display = "block";
loginForm.style.display = "none";

// Login Button
loginBtn.addEventListener("click", function() {

    signupForm.style.display = "none";
    loginForm.style.display = "block";

    heading.innerText = "Login";
    create.innerText = "Welcome back! Login to continue";

});

// Signup Button
signupBtn.addEventListener("click", function() {

    signupForm.style.display = "block";
    loginForm.style.display = "none";

    heading.innerText = "Signup";
    create.innerText = "Create your account to get started";

});

// Signup Form Submit
signupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Signup Successful!");

});

// Login Form Submit
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Login Successful!");

});
