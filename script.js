function sectionOperation(open, close){
    var open = document.getElementById(open);
    var close = document.getElementById(close);
    if (open.style.display === "block") {
        open.style.display = "none";
    } else {
        open.style.display = "block";
    }
    if (close.style.display === "block" && close != null) {
        close.style.display = "none";
    }
}

function gallery(image){
    var image = image;
    var preview = document.getElementById('preview');
    var bg = document.getElementById('prevBg');
    preview.style.opacity = 100;
    preview.style.display = "block";
    bg.style.opacity = 100;
    bg.style.display = "block";
    preview.src = image;
}

function preview(){
    var preview = document.getElementById('preview');
    var bg = document.getElementById('prevBg');
    preview.style.opacity = 0;
    preview.style.display = "none";
    bg.style.opacity = 0;
    bg.style.display = "none";
}