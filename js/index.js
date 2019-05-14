function logout() {
    firebase.auth().signOut().then(function () {
        window.location.pathname = '/login.html'
    }).catch(function (error) {
        window.alert("Error: " + error);
    });
}