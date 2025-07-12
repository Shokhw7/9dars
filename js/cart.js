import {changeBasket} from "./basket.js"
import { updateCartUI } from "./updateUI.js"

const localProducts = JSON.parse(localStorage.getItem("products"))

changeBasket(localProducts);
if(localProducts){
    changeBasket(localProducts)
    updateCartUI(localProducts)
}