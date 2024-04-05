import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useShoppingCart } from './ShoppingCartContext';

function ProductCard({ product }) {
    const firstImage = product.images[0];
    const { addToCart } = useShoppingCart();

    return (
        <Card className="h-100">
        <Card.Img variant="top" src={firstImage} alt={product.title} style={{ width: '200px', height: '150px', objectFit: 'cover' }} />
        <Card.Body className="d-flex flex-column">
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                ${product.price}
                <br />
                Rating: {product.rating}
            </Card.Text>
            <Button onClick={() => addToCart({product})} variant="primary" className="mt-auto">
                Add to Cart
            </Button>
        </Card.Body>
        </Card>
    );
}

export default ProductCard;
