import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useShoppingCart } from '../contexts/ShoppingCartContext';
import Modal from 'react-bootstrap/Modal';

/* This is a product card container for demonstrating one single product */

function ProductCard({ product }) {
    const [show, setShow] = useState(false);
    const firstImage = product.images[0];
    const { addToCart } = useShoppingCart();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Card className="h-100">
        <Card.Img variant="top" src={firstImage} alt={product.title} style={{ width: '200px', height: '150px', objectFit: 'cover' }} />
        <Card.Body className="d-flex flex-column">
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                ${product.price}
                <br />
                Rating: {product.rating}
                <br />
                {product.stock} in stock
            </Card.Text>
            <Button onClick={() => { addToCart({product}); handleShow(); }} variant="primary" className="mt-auto">
                Add to Cart
            </Button>
        </Card.Body>
        </Card>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Added to Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>{product.title} has been added to your cart!</Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default ProductCard;
