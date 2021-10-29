function myFunction1() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
        x.className += " responsive";
    }
    else {
        x.className = "nav";
    }
}
function myFunction2() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
document.getElementById("w8-d-blue").addEventListener("click", function (e) {
    var target = e.target;

    target.classList.toggle("iconize");
    target.classList.toggle("iconize2");
    
    
}, false);