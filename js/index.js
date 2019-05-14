firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        window.location.pathname = '/chofer.html'
    }
});

function login() {
    
    var userEmail = document.getElementById("email_field").value;
    var userPassword = document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error: " + errorMessage);
        // ...
    });
}

