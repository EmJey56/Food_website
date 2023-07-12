// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

  function togglePopup() {
    var popup = document.getElementById("popup");
    if (popup.style.display === "none") {
      popup.style.display = "block";
    } else {
      popup.style.display = "none";
    }
  }

  
document.getElementById("order").onclick = function(){
  window.location.href = "https://www.swiggy.com/restaurants/burger-king-rmv-2nd-stage-sanjaynagar-bangalore-8032";

}
