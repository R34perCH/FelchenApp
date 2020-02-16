import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAfB8BqyJuUoIZtWO7BwulmGmCiAt7XkP8",
    authDomain: "felchenapp.firebaseapp.com",
    databaseURL: "https://felchenapp.firebaseio.com",
    projectId: "felchenapp",
    storageBucket: "felchenapp.appspot.com",
    messagingSenderId: "992123451616",
    appId: "1:992123451616:web:48a86763826de87e783885"
};

export default class Firebase {
    static db;

    static init() {
        firebase.initializeApp(config);
        Firebase.db = firebase.firestore();
    }
}