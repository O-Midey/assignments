var email = document.getElementById("email").value;
var password = document.getElementById("email").value;

function logIn(){
  if (!email){
    alert("enter your email");
  }
  else if (!password){
    alert("enter your password");
  }
 else if(email && password.length > 6){
   location.replace("successfully-logged-in.html");
 }
}