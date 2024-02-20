var turn = true;
var last_turn = false;
var player_board;
var oppo_board;
var current_piece="undefined";
var current_cell ="undefined";
var font_size_val;
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');
const cells_owner =new Array(9);
const cells_size =new Array(9);
const play_arr =new Array(6);
const oppo_arr = new Array(6);
var owin=0;
var pwin=0;
player_board=document.getElementById("game-pieces-player");
oppo_board=document.getElementById("game-pieces-oppo");

function lowestCell(){
  var b=7;
  if (document.getElementById("td1").getAttribute("size")<b) b=document.getElementById("td1").getAttribute("size");
  if (document.getElementById("td2").getAttribute("size")<b) b=document.getElementById("td2").getAttribute("size");
  if (document.getElementById("td3").getAttribute("size")<b) b=document.getElementById("td3").getAttribute("size");
  if (document.getElementById("td4").getAttribute("size")<b) b=document.getElementById("td4").getAttribute("size");
  if (document.getElementById("td5").getAttribute("size")<b) b=document.getElementById("td5").getAttribute("size");
  if (document.getElementById("td6").getAttribute("size")<b) b=document.getElementById("td6").getAttribute("size");
  if (document.getElementById("td7").getAttribute("size")<b) b=document.getElementById("td7").getAttribute("size");
  if (document.getElementById("td8").getAttribute("size")<b) b=document.getElementById("td8").getAttribute("size");
  if (document.getElementById("td9").getAttribute("size")<b) b=document.getElementById("td9").getAttribute("size");

return b;
}


function highestPiece(){
  if (!turn){
if (document.getElementById("p5").getAttribute("used")=="false") return 6;
if (document.getElementById("p4").getAttribute("used")=="false") return 5;
if (document.getElementById("p3").getAttribute("used")=="false") return 4;
if (document.getElementById("p2").getAttribute("used")=="false") return 3;
if (document.getElementById("p1").getAttribute("used")=="false") return 2;
if (document.getElementById("p0").getAttribute("used")=="false") return 1;
else return -1;
}
if (turn){
if (document.getElementById("p11").getAttribute("used")=="false") return 6;
if (document.getElementById("p10").getAttribute("used")=="false") return 5;
if (document.getElementById("p9").getAttribute("used")=="false") return 4;
if (document.getElementById("p8").getAttribute("used")=="false") return 3;
if (document.getElementById("p7").getAttribute("used")=="false") return 2;
if (document.getElementById("p6").getAttribute("used")=="false") return 1;
else return -1;
}
}



function switchvis(){
  if (turn){
    player_board.style.visibility="visible";
    oppo_board.style.visibility="hidden";
  }
  else   { oppo_board.style.visibility="visible";
      player_board.style.visibility="hidden";}
}

function StartGame(){
  reportWindowSize();


document.getElementById("q12").style.visibility="hidden";
console.log(turn);

switchvis();
last_turn=!last_turn;

}

function NewGame(){
for (i=1;i<=9;i++){
  document.getElementById("td"+i).setAttribute("owner","game"+i);
  document.getElementById("td"+i).setAttribute("size",0);
  document.getElementById("td"+i).innerHTML="" ;
  document.getElementById("td"+i).style.backgroundColor="#444";
  }
  for (i=0;i<=11;i++){
    document.getElementById("p"+i).setAttribute("used",false);
    }

  document.getElementById("q13").style.visibility="hidden";
  ChangeTurn()
  StartGame();

}
function checkWin(){

var owner00 = document.getElementById("td1").getAttribute("owner");
var owner01 = document.getElementById("td2").getAttribute("owner");
var owner02 = document.getElementById("td3").getAttribute("owner");
var owner10 = document.getElementById("td4").getAttribute("owner");
var owner11 = document.getElementById("td5").getAttribute("owner");
var owner12 = document.getElementById("td6").getAttribute("owner");
var owner20 = document.getElementById("td7").getAttribute("owner");
var owner21 = document.getElementById("td8").getAttribute("owner");
var owner22 = document.getElementById("td9").getAttribute("owner");

if (owner00==owner01 && owner01==owner02) {
  //console.log("wygrana#1");
document.getElementById("td1").style.backgroundColor="green";
document.getElementById("td2").style.backgroundColor="green";
document.getElementById("td3").style.backgroundColor="green";
return true;
}
if (owner10==owner11 && owner11==owner12)  {
//  console.log("wygrana#2");
document.getElementById("td4").style.backgroundColor="green";
document.getElementById("td5").style.backgroundColor="green";
document.getElementById("td6").style.backgroundColor="green";
return true;
}
if (owner20==owner21 && owner21==owner22)  {
//  console.log("wygrana#3");
document.getElementById("td7").style.backgroundColor="green";
document.getElementById("td8").style.backgroundColor="green";
document.getElementById("td9").style.backgroundColor="green";
return true;
}
if (owner00==owner10 && owner10==owner20)  {
//  console.log("wygrana#4");
document.getElementById("td1").style.backgroundColor="green";
document.getElementById("td4").style.backgroundColor="green";
document.getElementById("td7").style.backgroundColor="green";
return true;
}
if (owner01==owner11 && owner11==owner21) {
//  console.log("wygrana#5");
document.getElementById("td2").style.backgroundColor="green";
document.getElementById("td5").style.backgroundColor="green";
document.getElementById("td8").style.backgroundColor="green";
return true;
}
if (owner02==owner12 && owner12==owner22)  {
//  console.log("wygrana#6");
document.getElementById("td3").style.backgroundColor="green";
document.getElementById("td6").style.backgroundColor="green";
document.getElementById("td9").style.backgroundColor="green";
return true;
}
if (owner00==owner11 && owner11==owner22)  {
//  console.log("wygrana#7");
document.getElementById("td1").style.backgroundColor="green";
document.getElementById("td5").style.backgroundColor="green";
document.getElementById("td9").style.backgroundColor="green";
return true;
}
if (owner02==owner11 && owner11==owner20)  {
//  console.log("wygrana#8");
document.getElementById("td3").style.backgroundColor="green";
document.getElementById("td5").style.backgroundColor="green";
document.getElementById("td7").style.backgroundColor="green";
return true;

//console.log("checkwinstop");
}

}
/*
function checkPossibleMove(){

  if (!turn){
    if()
  }
}
*/
function playnewgame(){
 //turn=!turn;
  player_board.style.visibility="hidden";
  oppo_board.style.visibility="hidden";
  document.getElementById("p11").setAttribute("used","false");

  current_piece="undefined";
  document.getElementById("q13").style.visibility="visible";
}

function playnewgameplus1(){
if (turn){
  pwin++;
  document.getElementById("wygranap").innerHTML=pwin;
}
else{owin++;
document.getElementById("wygranao").innerHTML=owin;

}
playnewgame();
}

function realityCheck(){
  var a= highestPiece();
  var b= lowestCell();
  console.log(a+" "+b);
  if ((a<1) && !(checkWin()=="false")) {alert ("Brak pionka. \n Wynik gry: REMIS");
  playnewgame();
player_board.style.visibility="hidden";
oppo_board.style.visibility="hidden";}
  else if ((b>=a) && !(checkWin()=="false")) {alert("Brak dostępnego miejsca.\n Wynik gry: REMIS");
playnewgame();
}
  if(checkWin()) {
    var symbolOX;
    if (turn="true") symbolOX="X"
    else
     symbolOX="O";
     alert("Wygrał gracz "+symbolOX)
     playnewgame();
  }

}

function ChangeTurn(){
checkWin();
realityCheck();
  //console.log("changeturnstart");
if (turn){
  oppo_board.style.visibility="visible";
  player_board.style.visibility="hidden";

}
if (!turn){
  oppo_board.style.visibility="hidden";
  player_board.style.visibility="visible";
}


turn=!turn;


//console.log("changeturnstop");
}


function PickPiece(id){
//  console.log("ppstart"+id);
  if (current_piece!="undefined") return;
  current_piece=id;
  document.getElementById(id).setAttribute("used",true);
id.used = true;
//console.log("ppstop");
}


function PutPiece(id){
//  console.log("putpsta"+id);
//  console.log(1+current_piece);

  var canPlay = true;
  if (current_piece!= undefined) {//console.log ("good! - chose piece");
    var size2 = document.getElementById(id);
    var size3 = size2.getAttribute("size");}

    else {canPlay = false;
console.log("wrong #1");
return}
    var size4 = document.getElementById(current_piece);
    console.log(size4);
    //console.log(IMPORTANT +size4.getAttribute("owner"));
    var size5 = size4.getAttribute("size");

  if (size3 < size5) console.log ("good! - bigger");
else {
  canPlay=false;
  console.log("wrong #2 - smaller piece");
  return;
}
  var el_id2 = size2.getAttribute("owner");
  var el_id3 = size4.getAttribute("owner");
//  console.log("current piece" +el_id3);
  if (el_id2 != el_id3) console.log ("good! - different owner");
  else{
    console.log("same owner - cant replace");
    return;
  }

if (canPlay==true){
size2.setAttribute("size",size5);
size2.setAttribute("owner",el_id3);

//console.log(IMPORTANT2 + size2.getAttribute(owner));

if (size2.getAttribute("owner")=="o"){

  size2.innerHTML="X";
  var fontsize_= size2.getAttribute("size")*font_size_val;
  size2.style.fontSize = fontsize_+"px";
}

if (size2.getAttribute("owner")=="p"){

    size2.innerHTML="O";
    var fontsize_= size2.getAttribute("size")*font_size_val;
    size2.style.fontSize = fontsize_+"px";
  }


if (checkWin()){
playnewgameplus1();

}
else
{
ChangeTurn();
current_piece="undefined";
}
}
}

//funkcja hashująca
/*const cyrb53 = function(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
    h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1>>>0);
};*/

//console.log(cyrb53());
console.log(screen + window.screen.width);

//miana szerokości okna
function reportWindowSize() {
  if (window.innerHeight1000) font_size_val=38;
  else if (window.innerHeight500) font_size_val=30;
  else font_size_val=25;

}


window.onresize = reportWindowSize;
