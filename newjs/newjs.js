// zad 13
function xiy(){
    var x=parseInt(document.getElementById("liczbax").value);
    var y=parseInt(document.getElementById("liczbay").value);
    if(x>y){
        document.getElementById("porownanie").innerHTML="x > y";
    }
   if(x<y){
        document.getElementById("porownanie").innerHTML="x < y";
    }
   if(x==y){
        document.getElementById("porownanie").innerHTML="x = y";
    }
    if(isNaN(x)||isNaN(y)){
        alert("Wpisz liczbę rzyczywistą w pole x oraz y");
    }
}

// zad 15
function logowanie(){
var login = document.getElementById("login").value;
switch(login) {
case "admin":
document.getElementById("info").innerHTML="jesteś zalogowany jako administrator";
break;
case "user1":
document.getElementById("info").innerHTML="jesteś zalogowany jako user1";
break;
case "user2":
document.getElementById("info").innerHTML="jesteś zalogowany jako user2";
break;
default:
document.getElementById("info").innerHTML="użytkownik nie istnieje!";
}
}