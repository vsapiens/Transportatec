firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        var emailChar = user.email[0];
        if(emailChar == "a" || emailChar == "l"){
            window.location.pathname = '/index.html'
        }else if(emailChar == "c"){
            window.location.pathname = '/chofer.html'
        }
        /* window.location.pathname = '/chofer.html' */
    }
});

function register() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var rePassword = document.getElementById("rePassword").value;
    
    if(password === rePassword){
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Error: " + errorMessage);
            // ...
        });
    }else{
        window.alert("Bad password");
    }    
}