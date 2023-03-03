
function demo(){
    document.getElementById('custom').innerHTML = Date();
}
// bulb 
function bulbon(){
    document.getElementById('bulb').src="image/on.png";
}
function bulboff(){
    document.getElementById('bulb').src="image/off.png";
}
// bulb off 
// font size start 
function txt(){
    document.getElementById('changetxt').style.fontSize="50px";
}
// font size end
// txt none start
 function txtdisplaynone(){
    document.getElementById('txtnone').style.display='none';
 }
// txt none end 
// display block start
 function txtdisplayblock(){
    document.getElementById('txtblock').style.display='block';
 }
// display block end 
// text change start
function txtchange(){
    document.getElementById('txt').innerHTML = "Hello world.";
} 
// text change end 