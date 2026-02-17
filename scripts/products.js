const loadProductsCategory = () => {
  const url = "https://fakestoreapi.com/products/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayProductsCategory(data));
};

const displayProductsCategory = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";

  for (const category of categories) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
      <button href="" class="btn btn-outline btn-primary rounded-xl">${category}</button>
    `;
    categoryContainer.appendChild(btnDiv);
  }
};

// const displayProducts = (products) => {
//   const categoryContainer = document.getElementById("category-container");
//   products.forEach((product) => {
//     console.log(product.image);
//     const card = document.createElement("div");
//     card.innerHTML = `
//       <div class="card bg-base-100 w-96 h-full space-y-10 shadow-md">
//       <figure>
//         <img
//         class="h-80 bg-slate-400 w-full p-16"
//           src="${product.image}"
//           alt="${product.title}"
//         />
//       </figure>
//       <div class="card-body flex-grow flex flex-col justify-between">

//       <div class="card-actions w-full gap-3 justify-between">
//             <div class="badge badge-primary">${product.category}</div>
//             <div class="rating">
//                 <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" aria-label="2 star" checked="checked" />
//                 ${product.rating.rate} (${product.rating.count})
//             </div>
//         </div>
//         <P class="card-title">
//           ${product.title}
//         </P>
//         <h2 class="text-2xl font-bold">
//           $${product.price}
//         </h2>
//         <div class="card-actions w-full gap-3">
//             <div class="btn btn-outline flex-1">Details</div>
//             <div class="btn btn-primary flex-1">Add</div>
//         </div>
//       </div>
//     </div>
//     `;
//     categoryContainer.appendChild(card);
//   });
// };
loadProductsCategory();
