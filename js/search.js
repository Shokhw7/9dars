const searchText = document.getElementById("search-text");
const ul = document.getElementById("products-list");

searchText.addEventListener("input", () => {
  Array.from(ul.children).forEach((item) => {
    const cardTitle = item.querySelector(".card-title");
    if (
      cardTitle &&
      cardTitle.textContent
        .toLowerCase()
        .includes(searchText.value.toLowerCase())
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
