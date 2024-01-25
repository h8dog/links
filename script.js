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
    var exShade = document.getElementById('exShade');
    var price = document.getElementById('commTotal');
    var commFormat = document.getElementById('commFormat');
    var commType = document.getElementById('commType');
    var commBG = document.getElementById('commBG');
	var commAnimation = document.getElementById('commAnimation');
	var headshotBtn = document.getElementById('headshotBtn');
	var halfbodyBtn = document.getElementById('halfbodyBtn');
	var fullbodyBtn = document.getElementById('fullbodyBtn');
	var simpleBGBtn = document.getElementById('simpleBGBtn');
	var detailedBGBtn = document.getElementById('detailedBGBtn');
	var flatBtn = document.getElementById('flatBtn');
	var shadedBtn = document.getElementById('shadedBtn');
	var artBtn = document.getElementById('artBtn');
	var animatedBtn = document.getElementById('animatedBtn');
	var choosenBtn = '0 0 15px var(--accent)';
	var choosenBtnNot = '0 0 0 var(--accent)';
	var exFormat = 'png';
	var exPath = 'img/cmm'
	var animated = false;
	var detailedBG = true;
    var BGprice = 50;
    var shadingPrice = 20;
    var formatPrice = 30;
    var animationPrice = 15;
	var shade = 0;
    if(duck == 'simple' || duck == 'detailed'){
        commBG.innerHTML = duck;
    }
    else if(duck == 'flat' || duck == 'shaded'){
        commType.innerHTML = duck;
    }
    else if(duck == 'animation' || duck == 'art'){
        commAnimation.innerHTML = duck;
    }
    else{
        commFormat.innerHTML = duck;
        if (duck == 'headshot'){
			exShade.style.bottom = '-25%';
            exShade.style.height = '75%';
        }
        else if (duck == 'halfbody'){
			exShade.style.bottom = '-60%';
            exShade.style.height = '40%';
        }
        else{
            exShade.style.height = '0';
        }
    }
	if(commAnimation.innerHTML == 'art'){
		artBtn.style.boxShadow = choosenBtn;
		animatedBtn.style.boxShadow = choosenBtnNot;
		exFormat = 'png';
		exPath = 'img/cmm';
		animated = false;
		animationPrice = 0;
		fullbodyBtn.style.backgroundColor = '#02007A';
		detailedBGBtn.style.backgroundColor = '#02007A';
		commImg.style.height = '593px';
	}
	else if(commAnimation.innerHTML == 'animation'){
		artBtn.style.boxShadow = choosenBtnNot;
		animatedBtn.style.boxShadow = choosenBtn;
		commImg.style.height = '415px';
		exFormat = 'gif';
		exPath = 'img/gif';
		animated = true;
		fullbodyBtn.style.backgroundColor = '#02007a44';
		BGprice = 0;
		if(commFormat.innerHTML == 'fullbody'){
			commFormat.innerHTML = 'halfbody';
            exShade.style.height = '0';
        }
		if(commFormat.innerHTML == 'halfbody'){
            exShade.style.height = '0';
        }
		else{
			exShade.style.height = '40%';
			exShade.style.bottom = '-60%';
		}
		if(detailedBG == true){
			detailedBGBtn.style.backgroundColor = '#02007a44';
			if(commBG.innerHTML = 'detailed'){
				commBG.innerHTML = 'simple';
			}
		}
	}
    if(commFormat.innerHTML == 'headshot'){
        formatPrice = 15;
        shadingPrice = 10;
        BGprice = 10;
        animationPrice = 5;
		headshotBtn.style.boxShadow = choosenBtn;
		halfbodyBtn.style.boxShadow = choosenBtnNot;
		fullbodyBtn.style.boxShadow = choosenBtnNot;
    }
    else if(commFormat.innerHTML == 'halfbody'){
        formatPrice = 25;
        shadingPrice = 15;
        BGprice = 15;
        animationPrice = 10;
		headshotBtn.style.boxShadow = choosenBtnNot;
		halfbodyBtn.style.boxShadow = choosenBtn;
		fullbodyBtn.style.boxShadow = choosenBtnNot;

    }
    else{
        formatPrice = 35;
        shadingPrice = 25;
        BGprice = 25;
		headshotBtn.style.boxShadow = choosenBtnNot;
		halfbodyBtn.style.boxShadow = choosenBtnNot;
		fullbodyBtn.style.boxShadow = choosenBtn;

    }
    if(commType.innerHTML == 'flat'){
        shadingPrice = 0;
		flatBtn.style.boxShadow = choosenBtn;
		shadedBtn.style.boxShadow = choosenBtnNot;
    }
	else{
		flatBtn.style.boxShadow = choosenBtnNot;
		shadedBtn.style.boxShadow = choosenBtn;

	}
    if(commBG.innerHTML == 'simple'){
        BGprice = 0;
		detailedBG = false;
		simpleBGBtn.style.boxShadow = choosenBtn;
		detailedBGBtn.style.boxShadow = choosenBtnNot;
    }
    else{
        BGprice += shadingPrice;
		detailedBG = true;
		simpleBGBtn.style.boxShadow = choosenBtnNot;
		detailedBGBtn.style.boxShadow = choosenBtn;

	}
    total = BGprice + formatPrice + shadingPrice + animationPrice;
    price.textContent = `Total: $${total}`
    commImg.style.backgroundImage = `url(${exPath}/${commBG.textContent}_${commType.textContent}.${exFormat})`;
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
