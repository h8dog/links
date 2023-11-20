function sectionOperation(open, close){
    var open = document.getElementById(open);
    var close = document.getElementById(close);
    if (open.style.display === "block") {
        open.style.display = "none";
    } else {
        open.style.display = "block";
    }
    if (close.style.display === "block") {
        close.style.display = "none";
    }
}