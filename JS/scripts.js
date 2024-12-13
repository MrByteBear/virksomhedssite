// ***********  Variables **************
// Containers (Burger Menu & Hide Burger Menu)
const burgerMenu = document.querySelector(".burgerMenu");
const headerNav = document.querySelector(".headerNav");
const headerNavLinks = document.querySelector(".headerNavLinks");
const scrollThreshold = 100;
const toggleContainer = document.querySelector(".toggleable")

// Toggle burger and headerNav on click
burgerMenu.addEventListener("click", burgerClick); 
function burgerClick() { 
  burgerMenu.classList.toggle("active");
  headerNav.classList.toggle("active");
}

// Close burger and headerNav when a menu item is clicked
headerNavLinks.addEventListener("click", navLinksClick);
function navLinksClick() { 
  burgerMenu.classList.remove("active");
  headerNav.classList.remove("active");
}

// Reset the burger and headerNav state when resizing to desktop view
window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    burgerMenu.classList.remove("active");
    headerNav.classList.remove("active");
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold) {
    headerNav.classList.add("visible");
  } else {
    headerNav.classList.remove("visible");
  }
});
