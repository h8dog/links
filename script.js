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

function link(){
    var body = document.querySelector('body');
    var width = window.screen.width;
    var link = 'https://images.unsplash.com/photo-1520491286939-1680f46efe91?auto=format&w='+width;
    link = 'url('+link+')';
    body.style.backgroundImage = `${link}`;
}

window.onload = link;
window.onresize = link;