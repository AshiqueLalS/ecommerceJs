
function getAllData() {
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{
    let allProducts = json.map((p) => {
      p.price=p.price-3
      return p;
    })

    let totalPrice = allProducts.reduce((i, p)=>{
      return i+p.price
    },0)

    let totalPriceElement = document.getElementById("total-price")
    totalPriceElement.textContent =  "Total price = "+ totalPrice

    console.log(allProducts)
    let productListElement = document.getElementById("product-list")
for(let i=0 ; i<allProducts.length ; i++){
let productElement = document.createElement("div")
productElement.classList.add("col-12")
productElement.classList.add("col-sm-6")
productElement.classList.add("col-md-4")
productElement.classList.add("col-lg-4")
productElement.classList.add("col-xl-3")
productElement.classList.add("col-xxl-3")

productElement.innerHTML = `<div class="card" style="width: 18rem;">
                    <img src="${allProducts[i].image}" class="card-img-top product-image" alt="...">
                    <div class="card-body">
                      <h5 class="card-title product-title">${allProducts[i].title}</h5>
                      <p class="text-success">$ ${allProducts[i].price}</p>
                      <p class="card-text product-description">${allProducts[i].description}</p>
                      <a href="/product.html" class="btn btn-warning onClick="productInfo()">View Product</a>
                      <a href="#" class="btn btn-primary">Add to cart</a>
                    </div>
                  </div>`

productListElement.appendChild(productElement);
}

}  )      
}

function filterProducts(){
  let maxPrice = document.getElementById("max-price-input").value
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{
    let allProductsMap = json.map((p) => {
      p.price=p.price-3
      return p;
    })
    let allProducts = json.filter((p) =>{
      
      return p.price<maxPrice
    })

    let totalPrice = allProducts.reduce((i, p)=>{
      return i+p.price
    },0)

    let totalPriceElement = document.getElementById("total-price")
    totalPriceElement.textContent =  "Total price = "+ totalPrice

    

    console.log(allProducts)
    let productListElement = document.getElementById("product-list")
    productListElement.innerHTML = ""
   
for(let i=0 ; i<allProducts.length ; i++){
let productElement = document.createElement("div")
productElement.classList.add("col-12")
productElement.classList.add("col-sm-6")
productElement.classList.add("col-md-4")
productElement.classList.add("col-lg-4")
productElement.classList.add("col-xl-3")
productElement.classList.add("col-xxl-3")

productElement.innerHTML = `<div class="card" style="width: 18rem;">
                    <img src="${allProducts[i].image}" class="card-img-top product-image" alt="...">
                    <div class="card-body">
                      <h5 class="card-title product-title">${allProducts[i].title}</h5>
                      <p class="text-success">$ ${allProducts[i].price}</p>
                      <p class="card-text product-description">${allProducts[i].description}</p>
                      <a href="/product.html" class="btn btn-warning" onClick="productInfo()">View Product</a>
                      <a href="#" class="btn btn-primary">Add to cart</a>
                    </div>
                  </div>`

productListElement.appendChild(productElement)
}

}  )
}


// function productInfo(productId) {
//   fetch(`https://fakestoreapi.com/products/${productId}`)
//       .then(res => res.json())
//       .then(json => {
//         let product = json.map((p) => {
//           p.price=p.price-3
//           return p;
//         })
//         console.log("test")
    
//           console.log(product);
//           let productListElement = document.getElementById("product-info");
//           productListElement.innerHTML = ''; 

//           let productElement = document.createElement("div");
//           productElement.classList.add("row");
//           productElement.style.display = "flex";
//           productElement.style.alignItems = "center";

//           productElement.innerHTML = `
//               <div class="col-lg-6">
//                   <img src="${product.image}" class="w-100" style="height: 300px; object-fit: contain;"/>
//               </div>
//               <div class="col-lg-6">
//                   <h1>${product.title}</h1>
//                   <p class="text-success">$${product.price}</p>
//                   <p>${product.description}</p>
//                   <button class="btn-primary">Add to cart</button>
//               </div>`;

//           productListElement.appendChild(productElement);
//       })}



getAllData()
