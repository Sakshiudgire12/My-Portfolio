const header=document.querySelector("header");

Window.addEventListener("scorll",function(){
    header.classList.toggle("sticky",window.scrollY>200)
});
let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');
 menu.onclick=()=>
 {
     menu.classList.toggle('bx-x');
     navlist.classList.toggle('open');
 };

window.onscroll=()=>
{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr=scrollReveal({
    distnce:'40px',
    duration:2050,
    delay:200,
    reset:true
});


sr.reveal('. hero-text',{origin:'top'});
sr.reveal('.about-img, .education-item, .about-text',{origin:'bottom'});
sr.reveal('.about-text h2,text-center, .right-contact h2',{origin:'top'});
sr.reveal('.left-contact',{origin:'left'});
sr.reveal('.hero-text',{origin:'right'});
sr.reveal('.end-secton',{origin:'top'});