import getData from "./request.js";
import { updateUIAboutUI } from "./updateUI.js";
import { changeBasket } from "./basket.js";

const localProducts = JSON.parse(localStorage.getItem("products")) || [];
changeBasket(localProducts);

const id = new URLSearchParams(location.search).get("id");

if (id) {
  getData("https://dummyjson.com/products/" + id)
    .then((data) => updateUIAboutUI(data))
    .catch((err) => console.error("Xatolik:", err));
} else {
  console.error("ID yo'q");
}