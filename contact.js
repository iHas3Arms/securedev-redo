let submitBtn = document.getElementById("submit");
let inputs = document.querySelectorAll("input");
let textarea = document.querySelector("textarea");
let checkInputsReminder = document.getElementById("check-inputs-reminder");

submitBtn.addEventListener("click", (e) => {
    let filled = true;

    inputs.forEach(input => {
        if (input.value.length < 3) {
            filled = false;
            input.value = "";
            input.placeholder = input.placeholder.split("*")[0] + "*";
            input.style.outline = "1px solid red";
        }
        if (!input.checkValidity()) {
            filled = false;
            input.value = "";
            input.placeholder = input.placeholder.split("*")[0] + "*";
            input.style.outline = "1px solid red";
        } else {
            if (input.placeholder.includes("*")) {
                input.placeholder = input.placeholder.split("*")[0];
                input.style.outline = "none";
            }
        }
    });
    if (!filled) {
        checkInputsReminder.innerText = "*Make sure all of your inputs are correctly filled out";
        checkInputsReminder.style.color = "rgb(215, 18, 18)";
        return checkInputsReminder.style.opacity = "1";
    }

    checkInputsReminder.style.color = "#1b1d30";
    checkInputsReminder.style.opacity = "1";
    checkInputsReminder.style.scale = "1.1";
    // submitToAPI(e); uncomment when finished



    checkInputsReminder.innerText = "Your query has been submitted";
    inputs.forEach(input => input.value = "");
    textarea.value = "";
});

function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://zt3tg9rdcc.execute-api.eu-west-2.amazonaws.com/production/email";


    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;

    var data = {
        name : name,
        message : message,
        email : email,
        subject : subject
     };

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "https://zt3tg9rdcc.execute-api.eu-west-2.amazonaws.com/production/email");
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.withCredentials = false;
    xmlhttp.send(JSON.stringify(data));
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4) {
            var response = JSON.parse(xmlhttp.responseText);
            if (xmlhttp.status === 200 ) {
                console.log('successful');
                document.getElementById("contact-form").innerHTML = "<h1>Thank you for your message!</h1><br><h2>One of our team will get back to you soon!</h2>";
            } else {
                console.log('failed');
            }
        }
    }

 document.getElementById('contact-form').reset();

} 