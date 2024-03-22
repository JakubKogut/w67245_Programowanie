function zmienTekst() {
document.getElementById("tekst").innerHTML = "Witaj na mojej stronie!";
alert("Witaj na mojej stronie") }
for(var i = 0; i < 100; i++) 
if(i % 2 == 0 ) {
    console.log(i);
}

let person = prompt("Podaj pierwsza liczbe", "")
let person2 = prompt("Podaj druga liczbe", "")
var a = parseInt(person)
var b = parseInt(person2)
alert(a + b)

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
      
    if(hh > 12){
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    var t = setTimeout(function(){ currentTime() }, 1000); 
  
  }
  
  currentTime();