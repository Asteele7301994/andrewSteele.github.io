var myIndex = 0;
var myIndex2 = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("mySlides2");
///
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
///
for (i = 0; i < y.length; i++) {
  y[i].style.display = "none";  
}
myIndex2++;
if (myIndex2 > y.length) {myIndex2 = 1}    
y[myIndex2-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}