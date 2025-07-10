import { addProduct } from "./basket.js";

const template = document.querySelector("template");
const productsList = document.getElementById("products-list");

//
//
function updateUIAboutUI(product) {
  const container = document.getElementById("product-info");
  const img = document.getElementById("product-img");
  const title = document.getElementById("product-title");
  const price = document.getElementById("product-price");
  const description = document.getElementById("product-description");

  img.src = product.thumbnail;
  title.textContent = product.title;
  price.textContent = `$${product.price}`;
  description.textContent = product.description;

  container.classList.remove("hidden");
}

//

function updateUI( { products } ){
    products.forEach((product) =>{
        const {id, title, price, thumbnail, description : _description} = product;
        const clone = template.content.cloneNode(true)

        const image = clone.querySelector(".product-image")
        const cardTitle = clone.querySelector(".card-title")
        const description = clone.querySelector(".description")
        const narxi = clone.querySelector(".price")
        const a = clone.querySelector("a")
        const button = clone.querySelector(".buy-button")
        
        button.addEventListener("click", (e) => {
            e.preventDefault()
            addProduct(product)
        })

        a.href = `./about.html?id=${id}`;

        image.src = thumbnail
        cardTitle.textContent = title
        description.textContent = _description
        narxi.textContent = `$${price}`
        
        productsList.appendChild(clone)
    })
}

export {updateUI, updateUIAboutUI};