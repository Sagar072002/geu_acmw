let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

//preloader 
      var preloader = document.getElementById("loader");
      function myFunction() {
        setTimeout("preloader.style.display = 'none'", 2000);
      }



//incrementing the values 
      let section_counter = document.querySelector("#section_counter");
      let counters = document.querySelectorAll(".counter-item .counter");

      // Scroll Animation
      let counterobserver = new IntersectionObserver(
        (entries, observer) => {
          let [entry] = entries;
          if (!entry.isIntersecting) return;
          let speed = 200;
          counters.forEach((counter, index) => {
            function updatecounter() {
              const targetnumber = +counter.dataset.target;
              const initialnumber = +counter.innerText;
              const incpercount = targetnumber / speed;
              if (initialnumber < targetnumber) {
                counter.innerText = Math.ceil(initialnumber + incpercount);
                setTimeout(updatecounter, 40);
              }
            }
            updatecounter();

            if (counter.parentElement.style.animation) {
              counter.parentElement.style.animation = "";
            } else {
              counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
                index / counters.length + 0.5
              }s`;
            }
          });
        },
        {
          root: null,
          threshold: 0.4,
        }
      );
      counterobserver.observe(section_counter);



       //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




// navbar hovering per section

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});







      AOS.init({
        offset: 10,
        delay: 130,
        duration: 3000,
        easing: "ease",
      });


   