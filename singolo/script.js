document.querySelector('input[value="All"]').click();
document.addEventListener('scroll', onScroll);
let horizontalPhoneScreenOn = true;
let verticalPhoneScreenOn = true;
let colorChanged = false;
let horizontalPhone = document.querySelector('.phone_horizontal img');
let verticalPhone = document.querySelector('.phone_vertical img');

function onScroll (event) {
    const currentPosition = window.scrollY;
    const divs = document.querySelectorAll('body>div');
    const lis = document.querySelectorAll('.navigation a');
    divs.forEach((el) => {
        if (el.offsetTop <= currentPosition && (el.offsetTop + el.offsetHeight) > currentPosition) {
            lis.forEach((a) => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)){
                    a.classList.add('active');
                }
            });
        }
    });
}

function horizontalPhoneOnClick (event) {
    if (horizontalPhoneScreenOn){
        horizontalPhone.src = './assets/images/singolo_DOM/Slide-1/Phone_HorizontalOff.png';
        horizontalPhoneScreenOn = false;
    } else {
        horizontalPhone.src = './assets/images/singolo_DOM/Slide-1/phone_horizontalOn.png';
        horizontalPhoneScreenOn = true;
    }
}

function verticalPhoneOnClick (event) {
    if (verticalPhoneScreenOn){
        verticalPhone.src = './assets/images/singolo_DOM/Slide-1/Phone_VerticalOff.png';
        verticalPhoneScreenOn = false;
    } else {
        verticalPhone.src = './assets/images/singolo_DOM/Slide-1/phoneOn.png';
        verticalPhoneScreenOn = true;
    }
}

function nextSlide(event) {
    if (!colorChanged) {
        document.getElementById('slider').style.backgroundColor="#648BF0";
        colorChanged = true;
    } else {
        document.getElementById('slider').style.backgroundColor="#f06c64";
        colorChanged = false;
    }
}

function showAll() {
    var allImgs = document.querySelectorAll('.gallery_item');
    let i = 0;
    for (i=0; i<allImgs.length;i++) {
        allImgs[i].style.display = "block";
    }
}

function highlight(event) {
    var imgs = document.getElementsByClassName('gallery_item');
    let i = 0;
    for (i=0; i<imgs.length;i++) {
        if (imgs[i] != event.target){
            imgs[i].style.borderColor = "transparent";
        }
    }
    event.target.style.borderColor = '#F06C64';
}

function showWebDesign(event){
    var allImgs = document.querySelectorAll('.gallery_item');
    var imgs = document.querySelectorAll('.Web-Design');
    for (i=0; i<allImgs.length;i++) {
        allImgs[i].style.display = "none";
    }
    for (i=0; i<imgs.length;i++) {
        imgs[i].style.display = "block";
    }
}

function showGraphicDesign(event) {
    var allImgs = document.querySelectorAll('.gallery_item');
    var imgs = document.querySelectorAll('.Graphic-Design');
    for (i=0; i<allImgs.length;i++) {
        allImgs[i].style.display = "none";
    }
    for (i=0; i<imgs.length;i++) {
        imgs[i].style.display = "block";
    }
}

function showArtwork(event) {
    var allImgs = document.querySelectorAll('.gallery_item');
    var imgs = document.querySelectorAll('.Artwork');
    for (i=0; i<allImgs.length;i++) {
        allImgs[i].style.display = "none";
    }
    for (i=0; i<imgs.length;i++) {
        imgs[i].style.display = "block";
    }
}

function messageSubmission(){

}