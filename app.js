import {products} from "./products.js"

const productSection = document.querySelector(".products-section");
const filterButtons = document.querySelector(".filter-buttons");
const searchInput = document.getElementById("searchInputSection");

productSection.innerHTML = setItems();

searchInput.addEventListener("keyup", () => {
    let searchValue = searchInput.value;
    const items = products.map( (item) => {
        let titleFind = item.title;
        if(titleFind.toLowerCase().includes(searchValue.toLowerCase())){
            // console.log(titleFind+" ima "+searchValue);
            return `<div class="item">
            <div class="image-section">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <h5 class="title-item">${item.title}</h5>
            <h5 class="price">${item.price}</h5>
            </div>`
        }
    }).join("");
    productSection.innerHTML = items;
    if(items==""){
        productSection.innerHTML = "Sorry, no products matched your search";
    }
});

filterButtons.addEventListener("click", (e) => {
    const elem = e.target.id;
    if (elem.toLowerCase() === "all") {
        productSection.innerHTML = setItems();
    }
    else if(elem){ 
        filter(e);
    }
});

//  filter function, set target items except all 
function filter(elem){
    const items = products.map( (item) => {
        if (elem.target.id == item.company) {
            return `<div class="item">
            <div class="image-section">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <h5 class="title-item">${item.title}</h5>
            <h5 class="price">${item.price}</h5>
            </div>`
        }
    }).join("");
    productSection.innerHTML = items;
}
// set ALL items
function setItems(){
    const items = products.map((item) => {
            return `<div class="item">
            <div class="image-section">
                <img src="${item.image}" alt="${item.title}">
            </div>
            <h5 class="title-item">${item.title}</h5>
            <h5 class="price">${item.price}</h5>
            </div>`
        }).join("");
        return items
    }


