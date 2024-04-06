import React from 'react';
import ProductCard from './ProductCard';

/* This is the item list which fetch products into separate product carts to demonstrate on the webpage */

function ItemList({ products }) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {products.map((product) => (
        <div className="col" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ItemList;
