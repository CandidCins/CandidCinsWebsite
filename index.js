// mobile menu

//# <- ID of element
document.addEventListener('DOMContentLoaded', function() {
  let burger = document.getElementById('burger');
  let navLinks = document.getElementById('nav-links');

  burger.addEventListener("click", (event) => {
    navLinks.classList.toggle("is-active");
    event.preventDefault();
  });
});