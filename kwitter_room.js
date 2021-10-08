
 var firebaseConfig = {
      apiKey: "AIzaSyC6M_ilZY-P2hgaojTh2LCd0UaCd-myDt8",
      authDomain: "twitter-9521f.firebaseapp.com",
      projectId: "twitter-9521f",
      storageBucket: "twitter-9521f.appspot.com",
      messagingSenderId: "870193555623",
      appId: "1:870193555623:web:fb815d46164d925685d382"
    };
    firebase.initializeApp(firebaseConfig);

function getData()
{
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      //Start code

      //End code
      });});}
      getData();
