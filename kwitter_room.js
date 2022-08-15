var firebaseConfig = {
    apiKey: "AIzaSyDYhMEyfVLXN6ArkHY0wjJcbUJUs9ElVCU",
    authDomain: "lets-chat-web-app-51d9e.firebaseapp.com",
    projectId: "lets-chat-web-app-51d9e",
    storageBucket: "lets-chat-web-app-51d9e.appspot.com",
    messagingSenderId: "990750377533",
    appId: "1:990750377533:web:815c4d3e4a22c83262cc54",
    measurementId: "G-F7YZGDBCSF"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function directToAboutLetsChat() {
    window.location("AboutLetsChat.html");
}
function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child("room_name").update({
  purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

function redirectToRoomName(name)
{

  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() 
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = ("index.html");
}



