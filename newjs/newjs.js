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
//zad 16
function logowania(){
    var login = document.getElementById("loginy").value;
    var haslo = document.getElementById("haslo").value;
    
    if (login=="admin" && haslo=="xyz"){
        document.getElementById("infor").innerHTML="jesteś zalogowany jako administrator";
    }
    else if (login=="user1" && haslo=="abc"){
        document.getElementById("infor").innerHTML="jesteś zalogowany jako user1";
    }
    else if (login=="user2" && haslo=="cba"){
        document.getElementById("infor").innerHTML="jesteś zalogowany jako user2";
    }
    else {
        alert("podaj prawidłowe login i haslo");
    }
    
    }
    // zad 17
    function dodaj(){
        var nowy = document.createElement("li");
        var tekst = document.createTextNode(document.getElementById("imie").value)
        nowy.appendChild(tekst);
        var rodzic = document.getElementById("lista");
rodzic.appendChild(nowy);
    }
    //zad 18
    var zero = 0;
    function dodajdatek(){
        var datek=parseFloat(document.getElementById("datek").value);
        
        if(isFinite(datek)){
            zero +=datek;    
            document.getElementById("sumdat").innerHTML="suma zebranych środków: " + parseInt(zero);
             }   
             
             if(isNaN(datek) || datek<=0){
alert("Jeśli chcesz pomóc to wpisz datek jako liczbę większą od zera")
             }
   }
   //zad20
   function licytacja(){
       var licytacja=parseFloat(document.getElementById("kwotalic").value);
       var nastepna=parseFloat(document.getElementById("infolic").innerHTML);
       if(licytacja>zero){            
        document.getElementById("infolic").innerHTML=parseFloat(licytacja);
        
        console.log(infolic);
         }   
         if(licytacja>nastepna){
            document.getElementById("infolic").innerHTML=parseFloat(licytacja);
         }
         if(licytacja<nastepna){
            document.getElementById("infolic").innerHTML="Twoja oferta jest nizsza niz najwyzsza";
            document.getElementById("informacja").innerHTML="";
         }
         if(isNaN(licytacja)){
            document.getElementById("infolic").innerHTML="wpisz kwotę wpłaty w postaci liczby rzeczywistej";
            document.getElementById("informacja").innerHTML="";  
         }
   }
   //zad 21
   function losowanie(){
    var los=(Math.floor(Math.random()*3)+1);
    console.log(los);
    if(los==1){
        document.getElementById("papier").innerHTML="papier";  
    }
    if(los==2){
        document.getElementById("papier").innerHTML="kamien";  
    }
    if(los==3){
        document.getElementById("papier").innerHTML="norzyce";  
    }
   }

   // zad 25
   function los(){
       var str="";
    var los;
    for (var i = 0; i < 10; ++i) {
        los=(Math.floor(Math.random()*19));
        str += (Math.floor(Math.random()*19)) + ", ";
        }
        document.getElementById("wpislos").innerHTML=str;
   }

   //zad 26
   function los2(){
    var str="";
 var los;
 var liczba=parseFloat(document.getElementById("liczbaxxx").value);
 
 console.log(liczba);
 for (var i = 0; i < liczba; ++i) {
     los=(Math.floor(Math.random()*19));
     str += (Math.floor(Math.random()*19))+ ", ";
     }
     document.getElementById("wpislos2").innerHTML=str;
     
}