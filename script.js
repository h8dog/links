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

function gallery(image){
    var image = image;
    var preview = document.getElementById('preview');
    preview.src = image;
}

function commExample(duck){
    var commImg = document.getElementById('commExample');
    var price = document.getElementById('commTotal');
    var commFormat = document.getElementById('commFormat');
    var commType = document.getElementById('commType');
    var commBG = document.getElementById('commBG');
    var BGprice = 50;
    var shadingPrice = 20;
    var formatPrice = 30;
    if(duck == 'simple' || duck == 'detailed'){
        commBG.innerHTML = duck;
    }
    else if(duck == 'flat' || duck == 'shaded'){
        commType.innerHTML = duck;
    }
    else{
        commFormat.innerHTML = duck;
        if (duck == 'headshot'){
            commImg.style.height = '185px';
        }
        else if (duck == 'halfbody'){
            commImg.style.height = '350px';
        }
        else{
            commImg.style.height = '100%';
        }
    }

    if(commFormat.innerHTML == 'headshot'){
        formatPrice = 15;
        shadingPrice = 10;
        BGprice = 10;
    }
    else if(commFormat.innerHTML == 'halfbody'){
        formatPrice = 25;
        shadingPrice = 15;
        BGprice = 15;
    }
    else{
        formatPrice = 35;
        shadingPrice = 25;
        BGprice = 25;
    }
    if(commType.innerHTML == 'flat'){
        shadingPrice = 0;
    }
    if(commBG.innerHTML == 'simple'){
        BGprice = 0;
    }
    else{
        BGprice += shadingPrice;
    }
    total = BGprice + formatPrice + shadingPrice;
    price.textContent = `Total: $${total}`
    commImg.src = `img/cmm/${commBG.textContent}_${commType.textContent}.png`;
}

function GIFcommExample(duck){
    var commImg = document.getElementById('GIFcommExample');
    var price = document.getElementById('GIFcommTotal');
    var commFormat = document.getElementById('GIFcommFormat');
    var commType = document.getElementById('GIFcommType');
    var shadingPrice = 20;
    var formatPrice = 30;
    if(duck == 'flat' || duck == 'shaded'){
        commType.innerHTML = duck;
    }
    else{
        commFormat.innerHTML = duck;
        if (duck == 'headshot'){
            commImg.style.height = '225px';
        }
        else{
            commImg.style.height = '100%';
        }
    }

    if(commFormat.innerHTML == 'headshot'){
        formatPrice = 20;
        shadingPrice = 15;
    }
    else{
        formatPrice = 30;
        shadingPrice = 20;
    }
    if(commType.innerHTML == 'flat'){
        shadingPrice = 0;
    }
    total = formatPrice + shadingPrice;
    price.textContent = `Total: $${total}`
    commImg.src = `img/gif/${commType.textContent}.gif`;
}

function copyForm(arg){
    var text;
    if(arg == 'art'){
        text = document.getElementById('commForm').textContent;
    }
    else if(arg == 'gif'){
        text = document.getElementById('GIFcommForm').textContent;
        
    }
    navigator.clipboard.writeText(text);
}

function copyColor(color){
    navigator.clipboard.writeText(color);
}