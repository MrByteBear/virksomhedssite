/* Variables */
// Containers (Hide / Show)
const toggleContainer = document.querySelector(".toggleable")
// Containers (Open / Close Altered Front Page filter menu)
const openFilterMenu = document.getElementById('openFilter');
const closeFilterMenu = document.getElementById('closeFilter');

const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

openFilterMenu.addEventListener("click", toggleClick);
function toggleClick() { 
  if (!toggleContainer.classList.contains("active")) {
    toggleContainer.classList.add("active");
  }
}

closeFilterMenu.addEventListener("click", hideClick);
function hideClick() { 
  toggleContainer.classList.remove("active");
}  

dropdownToggles.forEach(function (toggleDrop) {
  toggleDrop.addEventListener('click', function (event) {
    event.preventDefault();

    const dropdownMenu = this.nextElementSibling;
    const arrowIcon = this.querySelector('i');

    // Toggle the menu visibility
    dropdownMenu.classList.toggle('active');

    // Toggle the arrow icon class between right and down
    if (dropdownMenu.classList.contains('active')) {
      arrowIcon.classList.remove('dropdownArrowRight');
      arrowIcon.classList.add('dropdownArrowDown');
    } else {
      arrowIcon.classList.remove('dropdownArrowDown');
      arrowIcon.classList.add('dropdownArrowRight');
    }
  });
});
