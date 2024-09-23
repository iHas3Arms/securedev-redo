function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://zt3tg9rdcc.execute-api.eu-west-2.amazonaws.com/production/email";


    var name = document.getElementById("name-input").value;
    var message = document.getElementById("message-input").value;
    var email = document.getElementById("email-input").value;
    var subject = document.getElementById("subject-input").value;

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