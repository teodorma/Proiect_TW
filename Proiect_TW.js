let slideIndex = 1;
let cardIndex = 1;
var id = null;
var pos = 165;
var j=0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
}

function currentDiv(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex-1].style.display = "block";
}
function createParagraf(){
  var div = document.createElement("p");
  let min = 1;
  let max = 5;
  let N = Math.floor(Math.random() * (max - min) ) + min;
  alert(N)
  div.textContent="Thank you for choosing August as your go-to clothing brand. We look forward to bringing you the latest fashion trends and exceptional customer service for years to come.";
  for(i=0;i<N;i++){
      document.getElementById("about").append(div);
  }
}
function plusCardSlides(n) {
  showCards(n);
}
function showCards(n){
  x = document.getElementsByClassName("product-card");
  clearInterval(id);
  if(n == 1){ id = setInterval(frame1, 1);}
  if(n==-1){ id = setInterval(frame2, 1);}
  function frame1() {
    if (j > pos) {
      clearInterval(id);
    } else{
      j+=3; 
      for(i = 0;i<16;i++)
          x[i].style.right = j + "px";
    }
  }
  function frame2() {
    if (j < pos-165) {
      clearInterval(id);
    } else{
      j-=3; 
      for(i = 0;i<16;i++)
          x[i].style.right = j + "px";
    }
  }
  if(n==1 && pos < 1155)
    pos+=330;
  if(n==-1 && pos>165)
    pos-=330;
}


function myTimeout(){
  id = setTimeout(autoReload,100000);
} 
function autoReload(){
  alert("Session Expired!");
  window.location.reload(true);
}


const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const PORT = 4000;
 
// Initialization
app.use(cookieParser());
 
app.use(session({
    secret: "amar",
    saveUninitialized: true,
    resave: true
}));
 
// User Object
 
const user = {
    name: "Amar",
    Roll_number: 43,
    Address: "Pune"
};
 
// Login page
app.get("/login", (req, res) => {
    req.session.user = user;
    req.session.save();
    return res.send("Your are logged in");
});
 
app.get("/user", (req, res) => {
    const sessionuser = req.session.user;
    res.send(sessionuser);
});
 
// Logout page
app.get("/logout", (req, res) => {
    req.session.destroy();
    res.send("Your are logged out ");
});
 
// Host
app.listen(PORT, () => console.log(`Server at ${PORT}`));