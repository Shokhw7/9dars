import getData from "./request.js";
import {updateUI} from "./updateUI.js";

getData("https://dummyjson.com/product?limit=200")
  .then((data) => updateUI(data))
  .catch((error) => console.log(error));
