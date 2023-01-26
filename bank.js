function register(){
regac=ac.value
regun=un.value
regps=sp.value

if(regac in localStorage){
    alert('Existing User')
    window.location='index.html'
}
else{
// user={"user_ac":regac,"user_un":regun,"user_ps":regps}   //1
//if we take key and value same we could create
//the object as
user={regac,regun,regps}   //2
// localStorage.setItem(user.user_ac,JSON.stringify(user))  //1
//or
localStorage.setItem(user.regac,JSON.stringify(user)) //2

alert("registration successfull")
window.location="index.html"
}
}
function signin(){

regac=bname.value
acps=bpass.value
if(regac in localStorage){
  userdata=JSON.parse(localStorage.getItem(regac) ) 
  if(acps==userdata.regps){
    window.location='homepage.html'
    b2.innerHTML=`<P>Welcome</P>`
  }
  else{
    alert('incorrect password')
  }
}
else{
   alert( "Account not Found!Create Your Account")
   window.location="signup.html"
}

}

function showPasswrd() {
    var x = document.getElementById("bpass");
    

    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  function signout(){
    window.location='index.html'
  }