var header = document.querySelector('.header');
window.onscroll = function() {
    if (header.classList.contains('fixed') && window.pageYOffset < 1) {
        header.classList.remove('fixed');
    } else if (window.pageYOffset > 1) {
        header.classList.add('fixed');
    }
}

var main = document.getElementsByClassName('main');

console.log(main[0].clientHeight);

var mainHeight = main[0].clientHeight;



if (mainHeight > 750) {
    main[0].classList.remove('bigsize');
} else if (mainHeight < 750){
    main[0].classList.add('bigsize');
}

var donationBtn = document.getElementsByClassName('donation');
var qiwi = document.getElementsByClassName('qiwi');
var closeBtn = document.getElementsByClassName('close-btn');

donationBtn[0].onclick = function qiwiShow() {
    qiwi[0].style.display = 'block';
}

closeBtn[0].onclick = function qiwiHide() {
    qiwi[0].style.display = 'none';
}



// document.documentElement.onclick = function qiwiHide() {
//     qiwi[0].style.display = 'none';
// }