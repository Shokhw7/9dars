import getData from "./request.js";
import {updateUI} from "./updateUI.js";
import { changeBasket } from "./basket.js";
import "./search.js"

getData("https://dummyjson.com/product?limit=200")
  .then((data) => updateUI(data))
  .catch((error) => console.log(error));

const localProducts = JSON.parse(localStorage.getItem("products")) || [];
changeBasket(localProducts);