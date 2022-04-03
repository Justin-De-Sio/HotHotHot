const inputs = document.querySelectorAll("input[type = 'text'], input[type = 'password']")
function pseudoChecker(input) {

    if (!input.value.match(/\w{3,20}/)) {
        errorMessage(input.parentNode, "pseudo pas complet");
    } else {
        errorMessage(input.parentNode);
    }
}

function emailChecker(input) {

    if (!input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        errorMessage(input.parentNode, "mail invalide")
    } else
        errorMessage(input.parentNode);
}
function passwordChecker(input) {

    password = "";
    if (!input.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
        errorMessage(input.parentNode,"Minimum eight characters, at least one uppercase letter, one lowercase letter and one number")
    }
    else {
        errorMessage(input.parentNode);
        password = input.value;
    }
}




function confirmPasswordChecker(input) {
    if(input.value!==password)
        errorMessage(input.parentNode,"pas le même mdp")
    else
        errorMessage(input.parentNode)
}

function errorMessage(container, message = null) {
    let span = container.querySelector("span");
    if (message) {
        container.classList.add("error")
        span.innerText = message;
    } else {
        container.classList.remove("error");
        span.innerText = "";
    }
}

inputs.forEach(input => {
    input.addEventListener("input", () => {
        switch (input.target.id) {
            case "pseudo":
                pseudoChecker(input);
                break;
            case "email":
                emailChecker(input);
                break;
            case "password":
                passwordChecker(input);
                break;
            case "confirm":
                confirmPasswordChecker(input);
                break;
        }

    })
})