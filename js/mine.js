depth = 0;
depthcounter = 1;
function mine() {
 depth = depth + depthcounter; // adds depth     
 document.getElementById("mine").innerHTML = depth; // writes depth
}