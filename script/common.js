// header
const nav = document.querySelectorAll('nav > ul > li')
const nav_a = document.querySelectorAll('nav > ul > li > a')
const sub = document.querySelectorAll('.sub')
console.log(nav,sub,nav_a)
// 1. 서브메뉴 안보이기
// 2. 마우스 오버시 메뉴 보이기, active 추가
// 3. 마우스 아웃시 메뉴 사라지게하기, active 제거
for(let i of sub){i.style.display = 'none'}
nav_a[0].classList.remove('active')
nav.forEach(function(t,i){
    t.addEventListener('mouseover',function(){
        sub[i].style.display = 'block'
        nav_a[i].classList.add('active')
    })
    t.addEventListener('mouseout',function(){
        sub[i].style.display = 'none'
        nav_a[i].classList.remove('active')
    })
})