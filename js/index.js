var email, route, schedule, bicycle, extraPerson;
var db = firebase.firestore();

reservations();

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
    /* 
    
    if (scheduleIndex == -1 || routeIndex == -1){
        window.alert("Please select a valid route and schedule.");
    }  
    
    
    */
}

function reservations() {
    var counter = 1;
    db.collection("reservation").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            var txt = '<tr><th scope="row">' + counter + '</th><td>' + doc.data().rut + '</td><td>' + doc.data().sch + '</td><td>' + doc.data().extra + '</td><td>' + doc.data().bici + '</td></tr>';
            $("#table").append(txt);
            counter++;
            console.log(doc.id, " => ", doc.data());
            document.getElementById("reservationNum").innerHTML = counter - 1;
        });
    });
}

function doneModalAction() {
    var isExtraPerson = document.getElementById("defaultCheck1").checked;
    var isBicycle = document.getElementById("defaultCheck2").checked;

    db.collection("reservation").add({
            rut: route,
            sch: schedule,
            extra: isExtraPerson,
            bici: isBicycle
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            window.alert("Success! Your reservation has been created.")
            $('#exampleModal').modal('hide');
            location.reload();
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}

function logout() {
    firebase.auth().signOut().then(function () {
        window.location.pathname = '/login.html'
    }).catch(function (error) {
        window.alert("Error: " + error);
    });
}