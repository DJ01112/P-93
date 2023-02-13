const firebaseConfig = {
      apiKey: "AIzaSyBDZsB4HbT40kn3HGU4HEB4zE2YXkMSanM",
      authDomain: "kwitter-f46cf.firebaseapp.com",
      databaseURL: "https://kwitter-f46cf-default-rtdb.firebaseio.com",
      projectId: "kwitter-f46cf",
      storageBucket: "kwitter-f46cf.appspot.com",
      messagingSenderId: "144459924219",
      appId: "1:144459924219:web:6ce60015a40dc5504fe65e",
      measurementId: "G-TK439VMLSD"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
