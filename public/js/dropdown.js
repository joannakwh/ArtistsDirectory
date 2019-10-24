//I should've made this into a handlebar but I'm bad
function dropdownHandler() {
    var targetdiv = document.getElementById("dropdown");
    if (targetdiv.style.display != "block") {
      targetdiv.style.display = "block";
    } else {
      targetdiv.style.display = "none";
    }
}