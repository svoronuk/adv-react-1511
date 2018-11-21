import firebase from "firebase";

export function createUser(email, password, callback) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(user => callback(user))
}

export function signIn(email, password, callback){
    firebase.auth().signInWithEmailAndPassword(email, password).then(user => callback(user))
}

export function stateChanged(callback){
    firebase.auth().onAuthStateChanged(user => callback(user))
}

