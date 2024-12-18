// ***********  Variables **************
// Containers (Burger Menu & Hide Burger Menu)
const headerNav = document.querySelector(".headerNav");
const headerNavMobile = document.querySelector(".headerNavMobile");
const burgerMenu = document.querySelector(".burgerMenu");
const burgerMenuIcon = document.querySelector("#burgerBtn")
// Variable for Max Scroll, Value is in "PX"
const scrollThreshold = 100;

// Toggle burger and headerNav on click
burgerMenu.addEventListener("click", burgerClick); 
function burgerClick() { 
  burgerMenuIcon.classList.toggle("active");
  headerNavMobile.classList.toggle("active");
}

// Close burger and headerNav when a menu item is clicked
headerNavMobile.addEventListener("click", navMobileLinksClick);
function navMobileLinksClick() { 
  burgerMenuIcon.classList.remove("active");
  headerNavMobile.classList.remove("active");
}

// Adds a background color when mouse is on the navbar
headerNav.addEventListener("mouseover", navAddBgCol);
  function navAddBgCol() {
    headerNav.classList.add("mouseOver");
}

// Removes a background color when mouse away from the navbar
headerNav.addEventListener("mouseout", navRemoveBgCol);
  function navRemoveBgCol() {
    headerNav.classList.remove("mouseOver");
}

// Reset the burger and headerNav state when resizing to desktop view
window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    burgerMenuIcon.classList.remove("active");
    headerNavMobile.classList.remove("active");
  }
});

// Adds / Removes visibility on header when scrolling past 100px in height.
window.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold) {
    headerNav.classList.add("scrollDown");
  } else {
    headerNav.classList.remove("scrollDown");
  }
});

