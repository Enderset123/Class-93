
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCS4yfZh6q8Av3nLlUHqMsBhbL4OkgwEms",
      authDomain: "kwitter-83ad2.firebaseapp.com",
      databaseURL: "https://kwitter-83ad2-default-rtdb.firebaseio.com",
      projectId: "kwitter-83ad2",
      storageBucket: "kwitter-83ad2.appspot.com",
      messagingSenderId: "427149438814",
      appId: "1:427149438814:web:45da6a8d07b795b9c3a9cf"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
