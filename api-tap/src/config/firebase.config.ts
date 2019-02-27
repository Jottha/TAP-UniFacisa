var firebase = require("firebase-admin");

var serviceAccount = require("fi");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    url: "url do firebase"
});

var bucket = firebase.storage().bucket();