var firebase = require('firebase');

//identifier for firebase insert your own key
//all sensitive information is replaced with ####
var config = {
    apiKey: "####",
    authDomain: "####",
    databaseURL: "####",
    projectId: "####",
    storageBucket: "####",
    messagingSenderId: "####"
};

//start firebase app
firebase.initializeApp(config);
console.log('Firebase Started');

//connect to database
var database = firebase.database();
var ref = database.ref('####');

exports.getChildAtOneNode = function (topReference, key, paramName) {

    console.log('getChildAtLastNode at ' + topReference + ' with paramName ' + paramName);

    var nameSearchRef = ref.child(topReference).child(paramName).child(key);

    return nameSearchRef.once('value').then(function (snapshot) {
        var childValue = snapshot.val();
        console.log('childValue: ' + childValue);

        return childValue;
    })
}

exports.getValuesFromNode = function (topReference, key) {

    console.log('getValuesFromNode at ' + topReference + ' with key ' + key);

    var nameSearchRef = ref.child(topReference).child(key);

    return nameSearchRef.once('value').then(function (snapshot) {
        var childValue = snapshot.val();
        console.log('childValue: ' + childValue);

        return childValue;
    })
}