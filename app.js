AOS.init();

const template = document.querySelector("template");
const productsList = document.getElementById("products-list");

function updateUI( { products } ){
    products.forEach((product) =>{
        const {id, title, price, thumbnail, description : _description} = product;
        const clone = template.content.cloneNode(true)

        const image = clone.querySelector(".product-image")
        const cardTitle = clone.querySelector(".card-title")
        const description = clone.querySelector(".description")
        const narxi = clone.querySelector(".price")

        image.src = thumbnail
        cardTitle.textContent = title
        description.textContent = _description
        narxi.textContent = `$${price}`
        
        productsList.appendChild(clone)
    })
}

async function getData(url) {
  const req = await fetch(url);
  const data = await req.json();
  return data;
}

getData("https://dummyjson.com/product?limit=200")
  .then((data) => updateUI(data))
  .catch((error) => console.log(error));
