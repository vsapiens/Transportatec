firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.location.pathname = '/chofer.html'
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
            if(error){
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

                window.alert("Error: " + errorMessage);
                // ...
            }else{
                window.location.pathname = '/login.html'
            }
        });
    }else{
        window.alert("Bad password");
    }    
}