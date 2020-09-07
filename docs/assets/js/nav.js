/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("navbarDefault").style.width = "100px";
  document.getElementById("main").style.marginLeft = "100px";
  document.getElementById("openbtn").style.display = "none";
  console.log("openNav triggered")
}

function closeNav() {
  document.getElementById("navbarDefault").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("openbtn").style.display = "block";
  console.log("closeNav triggered")
}