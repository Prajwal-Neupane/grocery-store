import React, { useState } from "react";
import Product from "./Product";
import products from "../data";

const Products = () => {
  const [data, setData] = useState(products);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((product) => (
          <Product
            name={product.name}
            image={product.image}
            desc={product.description}
            key={product.id}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
