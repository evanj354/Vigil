
var config = {
  apiKey: "AIzaSyAZMASVmLHKGFd4cn73sWslnmzb3v5te7g",
  authDomain: "vigilrs-123.firebaseapp.com",
  databaseURL: "https://vigilrs-123.firebaseio.com",
  projectId: "vigilrs-123",
  storageBucket: "vigilrs-123.appspot.com",
  messagingSenderId: "562799414989"
};
firebase.initializeApp(config);

var admin = require('firebase-admin');

var serviceAccount = require('./ServiceAccountKey.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://vigilrs-123.firebaseio.com'
});

const uid = 'some-uid';



admin.auth().createUser({
  uid: uid,
  email: "user@example.com",
  phoneNumber: "+11234567890"
})
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log("Successfully created new user:", userRecord.uid);
  })
  .catch(function(error) {
    console.log("Error creating new user:", error);
  });


firebase.auth().signInWithCustomToken(token).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
  // Send token to your backend via HTTPS
  // ...
}).catch(function(error) {
  // Handle error
});

admin.auth().createCustomToken(uid) //gets auth instance and calls function createCustom token with uid parameter
.then(function(customToken) {
	console.log(customToken);
})
.catch(function(error) {
	console.log('Error creating custom token:', error);
});