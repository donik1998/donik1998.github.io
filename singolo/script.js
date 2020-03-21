document.addEventListener('scroll', onScroll);
let horizontalPhoneScreenOn = true;
let verticalPhoneScreenOn = true;
let horizontalPhone = document.querySelector('.phone_horizontal');
let verticalPhone = document.querySelector('.phone_vertical');

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

function HorizontalPhoneOnClick (event) {
    if (horizontalPhoneScreenOn){

        horizontalPhoneScreenOn = false
    } else {
        horizontalPhoneScreenOn = true;
    }
}

function verticalPhoneOnClick (event) {
    if (verticalPhoneScreenOn){
        verticalPhoneScreenOn = false
    } else {
        verticalPhoneScreenOn = true;
    }
}