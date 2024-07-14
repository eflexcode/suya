let fullnameInput = document.getElementById("fullname");
let emailInput = document.getElementById('email');
let button = document.getElementById('button');
let text = document.getElementById('text');

function doClick() {
    console.log("fffffffffffffffffffffffffffffffff")
    name = fullnameInput.value
    var email = emailInput.value

    if (name.trim() === "") {
        // document.getElementById("errorname").innerHTML = "Name must be filled out"
        // fullnameInput.request.
        alert("Name must be filled out");
    }

    if (email.trim() === "") {
        alert("Email must be filled out");
    }

    fullnameInput.hidden = true
    emailInput.hidden = true
    button.hidden = true

    var newText = "Hello " + name + " thank you for signing up. A verification link has been sent to " + email
    text.innerHTML = newText;

}