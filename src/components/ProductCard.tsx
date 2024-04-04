import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProductCard({ product }) {
  // Accessing the first image
  const firstImage = product.images[0];

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={firstImage} alt={product.title} style={{ width: '200px', height: '150px', objectFit: 'cover' }} />
      {/* Add d-flex and flex-column to Card.Body */}
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
            ${product.price}
            <br />
            Rating: {product.rating}
        </Card.Text>
        {/* Add mt-auto to Button */}
        <Button variant="primary" className="mt-auto">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
