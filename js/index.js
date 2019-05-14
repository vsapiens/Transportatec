var email, route, schedule;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        email = user.email;
    } else {
        // No user is signed in.
    }
});

function modalAction() {
    var routes = ["Valle 1", "Valle 2", "San Nicolas", "Puerta de Hierro", "Cumbres", "San Jeronimo", "Lincoln", "Contry Linda Vista"];
    var schedules = ["8:00", "13:00", "21:00"];

    var scheduleIndex = document.getElementById("schedule").value;
    var routeIndex = document.getElementById("route").value;

    route = routes[routeIndex];
    schedule = schedules[scheduleIndex];

    document.getElementById("route-modal").innerHTML = route;
    document.getElementById("schedule-modal").innerHTML = schedule;
    /* Data validation */
    /* if (scheduleIndex == -1 || routeIndex == -1){
        window.alert("Please select a valid route and schedule.");
    }  */

}

function doneModalAction() {
    db.collection("reservacion").add({
            route = this.route,
            schedule = this.schedule
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    // window.open('mailto:' + email + '?subject=Reservation&body='
    // +"Your reservation it's set!"
    // +'\nRoute:'+route
    // +'\nSchedule: '+schedule
    // +'\nPlease check that everything is correct.'
    // );
}

function logout() {
    firebase.auth().signOut().then(function () {
        window.location.pathname = '/login.html'
    }).catch(function (error) {
        window.alert("Error: " + error);
    });
}