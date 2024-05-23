document.addEventListener("keyup", (e) => {
  // e.target.matches("#search-bar");
  // console.log(e.target.value);
  if (e.target.matches("#search-bar")) {
    document.querySelectorAll(".item").forEach((food) => {
      food.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? food.classList.remove("filter")
        : food.classList.add("filter");
    });
  }
});
