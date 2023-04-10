function login() {
var user = document.getElementById("username").value;
var pass = document.getElementById("password").value;
if (user==""){
    document.getElementById("error").innerHTML = ("Please enter your username and password");
    document.getElementById("username").innerHTML = "Please enter your valid username";
}
else{
    document.getElementById("error").innerHTML = "Thank you for logging in!";
    document.getElementById("username").innerHTML = "Saved";
}


if (pass==""){
    document.getElementById("error").innerHTML = "Please enter your username and password";
    document.getElementById("password").innerHTML = "Please enter your valid password";
}
else{
    document.getElementById("error").innerHTML = "Thank you for logging in!";
    document.getElementById("saved").innerHTML = "Please enter your valid password";

}
}

