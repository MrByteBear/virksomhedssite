// ***********  Variables **************
// Containers (Burger Menu & Hide Burger Menu)
const burger = document.querySelector(".burger");
const headerNav = document.querySelector(".headerNav");
const menu = document.querySelector(".menu");
const toggleContainer = document.querySelector(".toggleable")

// Toggle burger and headerNav on click
burger.addEventListener("click", burgerClick); 
function burgerClick() { 
  burger.classList.toggle("active");
  headerNav.classList.toggle("active");
}

// Close burger and headerNav when a menu item is clicked
menu.addEventListener("click", menuClick);
function menuClick() { 
  burger.classList.remove("active");
  headerNav.classList.remove("active");
}

// Reset the burger and headerNav state when resizing to desktop view
window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    burger.classList.remove("active");
    headerNav.classList.remove("active");
  }
});
