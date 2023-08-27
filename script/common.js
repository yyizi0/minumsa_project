// header
const nav = document.querySelectorAll('nav > ul > li')
const nav_a = document.querySelectorAll('nav > ul > li > a')
const sub = document.querySelectorAll('nav .sub')
const body_scroll = document.querySelector('body, html')
const header_bg = document.querySelector('header')
const open_nav = document.querySelector('.open_nav')
const m_nav_open = document.querySelector('.m_nav_open')
const m_nav_a = document.querySelectorAll('.m_nav_open > ul > li')
const m_nav_sub = document.querySelectorAll('.m_nav_open > ul > li > .sub')
// console.log(nav,sub,nav_a,body_scroll,header_bg,)
// console.log(open_nav,m_nav_open,m_nav_sub,m_nav_a)
// 1. 서브메뉴 안보이기
// 2. 마우스 오버시 메뉴 보이기, active 추가
// 3. 마우스 아웃시 메뉴 사라지게하기, active 제거
for(let i of sub){i.style.display = 'none'}
nav_a[0].classList.remove('active')
nav.forEach(function(t,i){
    t.addEventListener('mouseover',function(){
        // console.log(i)
        sub[i].style.display = 'block'
        nav_a[i].classList.add('active')
        header_bg.style.backgroundColor = '#fff'
    })
    t.addEventListener('mouseout',function(){
        sub[i].style.display = 'none'
        nav_a[i].classList.remove('active')
        header_bg.style.backgroundColor = 'rgba(255,255,255,0)'
    })
})
window.addEventListener('scroll',function(){
    if(window.scrollY > 0){
        // console.log('.')
        header_bg.style.backgroundColor = '#fff'
    }else {
        header_bg.style.backgroundColor = 'rgba(255,255,255,0)'
    }
})
// 모바일 메뉴
// 1. open_nav를 누르면 m_nav_open이 보인다
// 2. close를 누르면 m_nav_open 안보인다
m_nav_sub[0].classList.remove('active')
open_nav.classList.remove('active')
m_nav_open.classList.remove('active')
function toggleHandler() {
    open_nav.classList.toggle('active')
    m_nav_open.classList.toggle('active')
}
function init() {
    open_nav.addEventListener("click", toggleHandler)
}
init()
m_nav_a.forEach(function(t,i){
    t.addEventListener('click',function(){
        for(let j of m_nav_sub){j.classList.remove('active')}
        m_nav_sub[i].classList.add('active')
    })
})
/* m_nav_open.style.display = 'none'
let m_nav_boolean = false
open_nav.addEventListener('click',function(){
    if(m_nav_boolean == false){
        m_nav_open.style.display = 'block'
        open_nav.classList.add('active')
        m_nav_boolean = true
    }else{
        m_nav_open.style.display = 'none'
        m_nav_boolean = false
        open_nav.classList.remove('active')
    }
}) */