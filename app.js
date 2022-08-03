import {products} from "./products.js"

const productSection = document.querySelector(".products-section");

function setAllItems(){
    const items = products.map((item) => {
            return `<div class="item">
                    <div class="image-section">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <h5 class="title-item">${item.title}</h5>
                    <h5 class="price">${item.price}</h5>
                    </div>`
        }).join("");
    productSection.innerHTML = items;
}

setAllItems();
  