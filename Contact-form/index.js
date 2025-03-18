const fnameregex = /^(?=.{2,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/g
const lnameregex = /^(?=.{2,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/g
const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g

function validateEmail() {
    var input = document.getElementById("email").value
    if (input.match(regex)) {
        document.getElementById("email").classList.remove("error")
        document.getElementById("email-error").classList.remove("error")
        document.getElementById("email-error").classList.add("hide")
    } else if (input == "") {
        document.getElementById("email").classList.remove("error")
        document.getElementById("email-error").classList.remove("error")
        document.getElementById("email-error").classList.add("hide")
    } else {
        document.getElementById("email").classList.add("error")
        document.getElementById("email-error").classList.add("error")
        document.getElementById("email-error").classList.remove("hide")
    }
}

function validateFirst() {
    var input = document.getElementById("fname").value
    if (input.match(fnameregex)) {
        document.getElementById("fname").classList.remove("error")
        document.getElementById("fname-error").classList.remove("error")
        document.getElementById("fname-error").classList.add("hide")

    } else if (input == "") {
        document.getElementById("fname").classList.remove("error")
        document.getElementById("fname-error").classList.remove("error")
        document.getElementById("fname-error").classList.add("hide")

    } else {
        document.getElementById("fname").classList.add("error")
        document.getElementById("fname-error").classList.add("error")
        document.getElementById("fname-error").classList.remove("hide")
        document.getElementById("fname-error").innerHTML = "Please enter a valid first name"

    }
}

function validateLast() {
    var input = document.getElementById("lname").value
    if (input.match(fnameregex)) {
        document.getElementById("lname").classList.remove("error")
        document.getElementById("lname-error").classList.remove("error")
        document.getElementById("lname-error").classList.add("hide")

    } else if (input == "") {
        document.getElementById("lname").classList.remove("error")
        document.getElementById("lname-error").classList.remove("error")
        document.getElementById("lname-error").classList.add("hide")

    } else {
        document.getElementById("lname").classList.add("error")
        document.getElementById("lname-error").classList.add("error")
        document.getElementById("lname-error").classList.remove("hide")
        document.getElementById("lname-error").innerHTML = "Please enter a valid last name"

    }
}

function validateMessage() {
    var input = document.getElementById("message").value

    if (input == "") {
        document.getElementById("message").classList.add("error")
        document.getElementById("message-error").classList.remove("hide")
    } else {
        document.getElementById("message").classList.remove("error")
        document.getElementById("message-error").classList.add("hide")
    }
}


var generaldiv = document.getElementById("general-div")
var supportdiv = document.getElementById("support-div")

generaldiv.addEventListener('click', function () {

    document.getElementById("general-div").classList.add("radio-box")
    document.getElementById("support-div").classList.remove("radio-box")

    document.getElementById("query-error").classList.remove("error")
    document.getElementById("query-error").classList.add("hide")

    document.getElementById("general").classList.add("hide")
    document.getElementById("generalimg").classList.remove("hide")
    document.getElementById("support").classList.remove("hide")
    document.getElementById("supportimg").classList.add("hide")

    document.getElementById("support").checked = false;
    document.getElementById("general").checked = true;


});

supportdiv.addEventListener('click', function () {

    document.getElementById("support-div").classList.add("radio-box")
    document.getElementById("general-div").classList.remove("radio-box")

    document.getElementById("query-error").classList.remove("error")
    document.getElementById("query-error").classList.add("hide")

    document.getElementById("support").classList.add("hide")
    document.getElementById("supportimg").classList.remove("hide")
    document.getElementById("general").classList.remove("hide")
    document.getElementById("generalimg").classList.add("hide")

    document.getElementById("general").checked = false;
    document.getElementById("support").checked = true;


});

var customcheckbox = document.getElementById("consent")
var checkboximg = document.getElementById("checkboximg")
var checkboxdiv = document.getElementById("consentbox")

customcheckbox.addEventListener('click', function () {

    var isit = document.getElementById("consent").checked

    if (isit == true) {

        document.getElementById("consent").classList.add("hide");
        document.getElementById("checkboximg").classList.remove("hide");

        document.getElementById("consent-error").classList.remove("error")
        document.getElementById("consent-error").classList.add("hide")

        document.getElementById("consent").checked = true;
    } else {

        document.getElementById("consent").classList.remove("hide");
        document.getElementById("checkboximg").classList.add("hide");

        document.getElementById("consent-error").classList.remove("error")
        document.getElementById("consent-error").classList.add("hide")

        document.getElementById("consent").checked = false;
    }
});

checkboximg.addEventListener('click', function () {
    document.getElementById("consent").classList.remove("hide");
    document.getElementById("checkboximg").classList.add("hide");

    document.getElementById("consent-error").classList.add("hide")

    document.getElementById("consent").checked = false;

});

function validateEverything() {

    var fname = document.getElementById("fname").value
    var lname = document.getElementById('lname').value
    var email = document.getElementById("email").value
    var general = document.getElementById("general").checked
    var support = document.getElementById("support").checked
    var message = document.getElementById("message").value
    var checkbox = document.getElementById("consent").checked

    if (fname.match(fnameregex) && lname.match(lnameregex) && email.match(regex) && ((general == true) || support == true) && message != "" && checkbox == true) {


        document.getElementById("generalimg").classList.add("hide")
        document.getElementById("supportimg").classList.add("hide")
        document.getElementById("general").classList.remove("hide")
        document.getElementById("support").classList.remove("hide")


        document.getElementById("support-div").classList.remove("radio-box")
        document.getElementById("general-div").classList.remove("radio-box")

        document.getElementById("consent").classList.remove("hide");
        document.getElementById("checkboximg").classList.add("hide");


        document.getElementById("general").checked = false;
        document.getElementById("support").checked = false;
        document.getElementById("consent").checked = false;


        document.getElementById("fname").value = ""
        document.getElementById("lname").value = ""
        document.getElementById("email").value = ""
        document.getElementById("message").value = ""

        document.getElementById("notification").classList.remove('hide')


    } else {
        document.getElementById("notification").classList.add('hide')

        if ((fname == "") || (fname == fnameregex)) {
            document.getElementById('fname').classList.add("error")
            document.getElementById('fname-error').classList.remove('hide')
        }
        if ((lname == "") || (lname == lnameregex)) {
            document.getElementById('lname').classList.add("error")
            document.getElementById('lname-error').classList.remove('hide')
        }
        if ((email == "") || (email == regex)) {
            document.getElementById('email').classList.add("error")
            document.getElementById('email-error').classList.remove('hide')
        }
        if (general == false && support == false) {
            document.getElementById('query-error').classList.remove('hide')
            document.getElementById('query-error').classList.add('error')


        } if (message == "") {
            document.getElementById("message").classList.add("error")
            document.getElementById("message-error").classList.remove("hide")
        } if (checkbox == false) {
            document.getElementById("consent-error").classList.add("error")
            document.getElementById("consent-error").classList.remove("hide")
        }

        document.getElementById("notification").classList.add("hide")

    }
}