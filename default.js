//宣告 事件名稱
let _barBTN = document.querySelector('.barBTN');
let _linkbar = document.querySelector('.linkbar');

//事件監聽
_barBTN.addEventListener('click', function () {
    _linkbar.classList.toggle('linkbarSHOW');

});

// 捲動網頁，關閉選單
document.addEventListener('scroll', function () {
    _linkbar.classList.remove('linkbarSHOW');
});
