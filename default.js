let _barBTN = document.querySelector('.barBTN');
let _linkbar = document.querySelector('.linkbar');
_barBTN.addEventListener('click', function () {
_linkbar.classList.toggle('linkbarSHOW');
});
document.addEventListener('scroll', function () {
_linkbar.classList.remove('linkbarSHOW');
});
