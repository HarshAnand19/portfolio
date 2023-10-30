let sections =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



window.onscroll=()=>{
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset=sec.offsetTop - 150;
        let height= sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
links.classList.remove('active');
document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });

    let header =document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
};

//Scroll Reveal
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:1500,
    delay:150 
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box,.contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin:'right' });

//Typed JS
const typed = new Typed('.multiple-text',{
    strings: ['Full-Stack Developer','Web Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const sendMessageButton = document.getElementById('sendMessageBtn');

// Add a click event listener to the button
sendMessageButton.addEventListener('click', function() {
    // Redirect to the desired URL when the button is clicked
    window.location.href = 'https://www.linkedin.com/in/harsh-anand-/'; 
});
 
