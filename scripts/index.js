const loadProducts = () => {
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayProducts(data));
};

const displayProducts = (products) => {
  const trendingProduct = document.getElementById("trending-now");
  products.slice(0, 3).forEach((product) => {
    console.log(product.image);
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="card bg-base-100 w-96 h-full space-y-10 shadow-md">
      <figure>
        <img
        class="h-80 bg-slate-400 w-full p-16"
          src="${product.image}"
          alt="${product.title}"
        />
      </figure>
      <div class="card-body">

      <div class="card-actions w-full gap-3 justify-between">
            <div class="badge badge-primary">${product.category}</div>
            <div class="rating">
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" aria-label="2 star" checked="checked" />
                ${product.rating.rate} (${product.rating.count})
            </div>
        </div>
        <P class="card-title">
          ${product.title}
        </P>
        <h2 class="text-2xl font-bold">
          $${product.price}
        </h2>
        <div class="card-actions w-full gap-3">
            <div class="btn btn-outline flex-1">Details</div>
            <div class="btn btn-primary flex-1">Add</div>
        </div>
      </div>
    </div>
    `;
    trendingProduct.appendChild(card);
  });
};
loadProducts();
