var firebaseConfig = require('./firebaseConfig');

exports.firebaseOptions = function () {
    //firebase identifier
    var config = {
        apiKey: firebaseConfig.apiKey,
        authDomain: firebaseConfig.authDomain,
        databaseURL: firebaseConfig.databaseURL,
        projectId: firebaseConfig.projectId,
        storageBucket: firebaseConfig.storageBucket,
        messagingSenderId: firebaseConfig.messagingSenderId
    };

    return config;
}

exports.firebaseReferences = function (node) {

    //using switch case here might be inefficient in the long run
    //when we need to expand our functionality
    //separate into different packages instead

    switch (node) {
        case "root_reference":
            return firebaseConfig.rootReference;
            break;

        case "generic_key":
            return firebaseConfig.genericKey;
            break;

        case "search_booking_reference":
            return firebaseConfig.searchBookingReference;
            break;

        case "search_by_name_reference":
            return firebaseConfig.searchByNameReference;
            break;

        case "search_by_position_reference":
            return firebaseConfig.searchByPositionReference;
            break;

        case "search_location_reference":
            return firebaseConfig.searchLocationReference;
            break;

        case "search_phone_number_reference":
            return firebaseConfig.searchPhoneNumberReference;
            break;

        case "send_promotion":
            return firebaseConfig.sendPromotion;
            break;

        case "send_trivia":
            return firebaseConfig.sendTrivia;
            break;

        case "what_general":
            return firebaseConfig.whatGeneral;
            break;

        case "send_form_reference":
            return firebaseConfig.sendFormReference;
            break;

        case "who_in_committee":
            return firebaseConfig.whoInCommittee;
            break;
    }
}