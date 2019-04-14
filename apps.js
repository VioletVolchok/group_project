const navSlide= ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');

 //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

  // Animation Links
    navLinks.forEach((link, index) =>{
      console.log(index);
       if(link.style.animation) {
           link.style.animation=''
        } else {

            link.style.animation=`navLinkFade 0.5s ease forwards ${index /7+0.5}s`;
        }
          });
        // burger Animation
        burger.classList.toggle(`toggle`);

    });
}
navSlide();

$(function () {
         $(document).scroll(function () {
             var $nav = $("#main");
             $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
         });
     });
