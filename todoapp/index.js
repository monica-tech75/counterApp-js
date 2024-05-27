const buttonEl = document.querySelector(".dropdown-btn");
const dropdownMenu = document.querySelector(".dropdown-menu-content");

buttonEl.addEventListener("click", () => {
  dropdownMenu.classList.toggle("visible");
});
