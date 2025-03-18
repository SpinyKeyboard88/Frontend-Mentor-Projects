//window.onresize = resize;

// function img() {
//     var image = document.getElementById('illustration')
//     if (window.matchMedia("(max-width: 400px)").matches) {

//         image.src = './assets/images/illustration-sign-up-mobile.svg';
//     } else {
//         image.src = './assets/images/illustration-sign-up-desktop.svg'
//     }
// }
// function resize() {
//     img();
// }

const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g

function validateEmail() {
    var input = document.getElementById("email").value
    if (input.match(regex)) {
        document.getElementById("error-message").classList.remove("display-initial")
        document.getElementById("error-message").classList.add("display-none")
        document.getElementById("email").classList.remove("error")
        document.getElementById("email").classList.add("no-error")
    } else if (input == "") {
        document.getElementById("error-message").classList.remove("display-initial")
        document.getElementById("error-message").classList.add("display-none")
        document.getElementById("email").classList.remove("error")
        document.getElementById("email").classList.add("no-error")
    } else {
        document.getElementById("error-message").classList.remove("display-none")
        document.getElementById("error-message").classList.add("display-initial")
        document.getElementById("email").classList.add("error")
        document.getElementById("email").classList.remove("no-error")
    }

}

function confirmEmail() {
    var input = document.getElementById("email").value
    if (input.match(regex)) {
        document.getElementById("page-2").classList.add("display-initial");
        document.getElementById("page-2").classList.remove("display-none");
        document.getElementById("page-1").classList.add("display-none");
        document.getElementById("page-1").classList.remove("display-initial");

        document.getElementById("bold-email").innerHTML += `${input}`
    } else {
        document.getElementById("error-message").classList.remove("display-none")
        document.getElementById("error-message").classList.add("display-initial")
        document.getElementById("email").classList.add("error")
        document.getElementById("email").classList.remove("no-error")
    }
}

function dismiss() {
    location.reload();
}


