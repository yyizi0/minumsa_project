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
const sub_slide = new Swiper('#sub_slide',{
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
})
// new_book
const tab_title = document.querySelectorAll('#new_book .tab_title button')
const tab_contents = document.querySelectorAll('#new_book .tab_contents .contents')
console.log(tab_title,tab_contents)
for(let i of tab_contents){i.style.display = 'none'}
for(let i of tab_title){i.classList.remove('active')}
tab_title[0].classList.add('active')
tab_contents[0].style.display = 'flex'
tab_title.forEach(function(t,i,a){
    t.addEventListener('click',function(){
        for(let j of tab_contents){j.style.display = 'none'}
        tab_contents[i].style.display = 'flex'
        for(let u of tab_title){u.classList.remove('active')}
        t.classList.add('active')
    })
    
})