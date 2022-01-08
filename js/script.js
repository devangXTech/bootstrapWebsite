const filterBtn = document.querySelectorAll('.feature-item');
const filterImg = document.querySelectorAll('.feature-filter-item');


//img filter start

filterBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        const active = document.querySelector('.feature-nav .active');
        active.classList.remove('active');
        btn.classList.add('active');
        const filterValue = btn.getAttribute('data-target');

        filterImg.forEach(img =>{
            if(img.classList.contains(filterValue) || filterValue == "all"){
                img.style.display = "inline-block";
                img.style.animation = "imgAnimate .7s linear";
            }else{
                img.style.display = 'none';
            };
        });
    });
});
//img filter ends

// testimnial slider start

const reviewAray = [
    {
        para : '" Duis Et Metus Et Massa Tempus Lacinia. Class Aptent Taciti Sociosqu Ad Litora Torquent Per "',
        img :  "img/author-1.jpg",
        name : "mrs. clu",
        work : "web designer",
    },
    {
        para : '" Duis Et Metus Et Massa Tempus Lacinia. Class Aptent Taciti Sociosqu Ad Litora Torquent Per Conubia Nostra, Per Inceptos Himenaeos. Maecenas Ultricies, Orci Molestie Blandit Interdum Conubia Nostra, Per Inceptos Himenaeos."',
        img :  "img/author-2.jpg",
        name : "mr. machleran",
        work : "graphic designer",
    },
    {
        para : '" Duis Et Metus Et Massa Tempus Lacinia. Class Aptent Taciti Sociosqu Ad Litora Torquent Per Conubia Nostra, Per Inceptos Himenaeos. Maecenas Ultricies "',
        img :  "img/author-3.jpg",
        name : "mrs. laura",
        work : "digital marketing",
    }
];
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const reviewBox = document.querySelector('.testimonial-box');
const userName = document.querySelector('.testimonial-box .name');
const work = document.querySelector('.testimonial-box .work');
const img = document.querySelector('.testimonial-box .img');
const text = document.querySelector('.testimonial-box .testimonial-text');
let count = 0;

function sliderFunction(){
    const reviewArayValue = reviewAray[count];
    text.textContent = reviewArayValue.para;
    userName.textContent = reviewArayValue.name;
    work.textContent = reviewArayValue.work;
    img.src = reviewArayValue.img;
};
next.addEventListener('click',()=>{
    count++;
    if(count > reviewAray.length){
        count = 0;
    };
    sliderFunction();
});
prev.addEventListener('click',()=>{
    count--;
    if(count < 0){
        count = reviewAray.length
    };
    sliderFunction();
});

window.addEventListener('DOMContentLoaded',sliderFunction);

//testimonial slider ends


// header bg change on scroll 

const header = document.getElementById('header');
const logo = document.getElementById('logo');
const scrollBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 50){
        header.classList.add('bg-header');
        logo.src = "img/logo-2.svg";
        scrollBtn.classList.add('scrollBtn')
    }else{
        header.classList.remove('bg-header');
        logo.src = "img/logo.svg";
        scrollBtn.classList.remove('scrollBtn');
    };
});
// header bg change on scroll 

//for menu bar
const navbarToggler = document.querySelector('.navbar-toggler');
const menu = document.getElementById('menu');

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
});


//for accordian arrow
const accordianHeaders = document.querySelectorAll('#about .accordian .box .box-header');

accordianHeaders.forEach(header =>{
    header.addEventListener('click',()=>{
        header.classList.toggle('header-toggle');
    });
});

//for preloader
const preloader = document.getElementById('loader');

window.addEventListener('load',()=>{
    if(window.onload){
        preloader.style.display = "block";
    }else{
        preloader.style.display = "none";
    };
});
