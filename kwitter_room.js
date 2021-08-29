
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyASv-DwHd5CKE6cszJ-0CUQmZDGXfeBMxA",
    authDomain: "practice-activity-11a05.firebaseapp.com",
    databaseURL: "https://practice-activity-11a05-default-rtdb.firebaseio.com",
    projectId: "practice-activity-11a05",
    storageBucket: "practice-activity-11a05.appspot.com",
    messagingSenderId: "131200252019",
    appId: "1:131200252019:web:716f407f918026dbf09206"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome  "+user_name+"!";


    function addRoom(){
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({purpose:"adding room"});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("room name-"+room_name);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToroomname(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";

}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}