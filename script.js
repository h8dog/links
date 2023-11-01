function sectionOperation(section){
    var comms = document.getElementById(section);
    if (comms.style.display === "block") {
        comms.style.display = "none";
    } else {
        comms.style.display = "block";
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