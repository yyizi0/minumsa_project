// main_slide
const bullet = ['말 놓을 용기','에고이스트']
const txt = document.querySelectorAll('.txt p')
const main_slide = new Swiper('#main_slide',{
    autoplay:{delay:2000},
    loop:true,
    speed:800,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
            }
    },
})