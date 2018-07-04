var firebase = require('firebase');
var firebaseHandlers = require('./firebaseHandlers')

//start firebase app
firebase.initializeApp(firebaseHandlers.firebaseOptions());
console.log('Firebase Started');

//connect to database
var database = firebase.database();
var ref = database.ref(firebaseHandlers.firebaseReferences("root_reference"));

exports.getChildAtOneNode = async function (topReference, key, paramName) {

    console.log('getChildAtLastNode at ' + topReference + ' with paramName ' + paramName);

    var nameSearchSnapshot = await ref.child(topReference)
                            .child(paramName)
                            .child(key)
                            .once('value');

    return nameSearchSnapshot.val();
}

//this code is KIV'ed
exports.getValuesFromNode = function (topReference, key) {

    console.log('getValuesFromNode at ' + topReference + ' with key ' + key);

    var nameSearchRef = ref.child(topReference).child(key);

    return nameSearchRef.once('value').then(function (snapshot) {
        var childValue = snapshot.val();
        console.log('childValue: ' + childValue);
        return childValue;
    })
}

exports.getAllChildValuesAsArray = async function(node) {
    console.log('getAllContentFromOneNode at: ' + node);
    var searchRef = await ref.child(node)
                            .once('value');

    var childArray = [];
    searchRef.forEach(function(childSnapshot) {
        childArray.push(childSnapshot.val());    
    })

    console.log(childArray);
    return childArray;
}