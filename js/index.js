import { isNull } from "util";

function logout() {
    firebase.auth().signOut().then(function () {
        window.location.pathname = '/login.html'
    }).catch(function (error) {
        window.alert("Error: " + error);
    });
}

function modalAction() {
    var routes = ["Valle 1","Valle 2","San Nicolas","Puerta de Hierro","Cumbres","San Jeronimo","Lincoln","Contry Linda Vista"];
    var schedules = ["8:00","13:00","21:00"];

    var scheduleIndex = document.getElementById("schedule").value;
    var routeIndex = document.getElementById("route").value;

    window.alert("scheduleIndex");

    /* if (isNaN(routeIndex) || isNull(scheduleIndex)){
        window.alert("Please select a valid route and schedule.");
    } */
}