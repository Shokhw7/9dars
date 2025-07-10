import getData from "./request.js";
import { updateUIAboutUI } from "./updateUI.js";

const id = new URLSearchParams(location.search).get("id");

if (id) {
  getData("https://dummyjson.com/products/" + id)
    .then((data) => updateUIAboutUI(data))
    .catch((err) => console.error("Xatolik:", err));
} else {
  console.error("ID yo'q");
}

getData("https://dummyjson.com/product/" + id)
  .then((data) => updateUIAboutUI(data))
  .catch((error) => console.log(error));
