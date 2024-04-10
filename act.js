var typed = new Typed(".text", {
    strings: ['Ukwedje, Lois'],
    typeSpeed:60,
    backSpeed:60,
    loop:true
  });

  let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // Scroll up
    navbar.classList.remove("hidden");
  } else {
    // Scroll down
    navbar.classList.add("hidden");
  }
  prevScrollPos = currentScrollPos;
};




function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

window.onscroll = function () {
  scrollFunction();
};


