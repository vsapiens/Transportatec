function logout() {
    firebase.auth().signOut().then(function () {
        window.location.pathname = '/login.html'
    }).catch(function (error) {
        window.alert("Error: " + error);
    });
}

class Chofer extends Persona {

    constructor(name, id, num_licencia) {
        this.name = name;
        this.id = id;
        this.num_licencia = num_licencia
    }

    getId() {
        return this.name;
    }

    getName() {
        return this.id;
    }

    get() {
        return num_licencia;
    }

    getNumUsuarios() {
        pass;
    }

    getListaUsuarios() {
        pass;
    }

    checkNotifications() {
        return "You have 0 notifications."
    }
}

// Debug
// let chofer = new Chofer("Luis Arturo", 849, 135309112);