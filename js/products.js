const getProducts = async () => {
    try {
      const results = await fetch("./data/products.json");
      const data = await results.json();
      const products = data.products;
      return products;
    } catch (err) {
      console.log(err);
    }
  };
  
  /*
  =============
  Load Category Products
  =============
   */
  const categoryCenter = document.querySelector(".category__center");
  
  window.addEventListener("DOMContentLoaded", async function () {
    const products = await getProducts();
    displayProductItems(products);
  });
  
  const displayProductItems = items => {
    let displayProduct = items.map(
      product => ` 