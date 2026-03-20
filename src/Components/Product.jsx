import React, { useEffect, useState } from "react";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 

        data.products.forEach((product) => {
          // console.log(`First review of ${product.title}:`, product.reviews[0]);
          console.log(product.reviews[0])
        })
        setProducts(data.products);
      });
  }, []);

  return (
    <div>
      <h3>Product List</h3>

      {products.map((item) => (
        <div >
          <h3>{item.title}</h3>
          <p>${item.price}</p>
          <p>{item.category}</p>
          <p>{item.tags[1]}</p>
          <p>{item.dimensions.height}</p>
          {/* <p>{item.reviews[0]}</p> */}
          <img src={item.thumbnail} width="120" alt={item.title} />
        </div>
      ))}

    </div>
  );
}

export default Product;