import { useState } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from 'react-bootstrap/Badge';
import { ListGroup } from "react-bootstrap";
import { useShoppingCart } from "./ShoppingCartContext";


export interface OffcanvasProps {
  className?: string | undefined;
}

const Cart: React.FC<OffcanvasProps> = ({ className }) => {
  const [show, setShow] = useState(false);
  const { cartItems, removeFromCart } = useShoppingCart();

  return (
    <>
      <Button onClick={() => setShow((s) => !s)} className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
        </svg>
      </Button>
      <Offcanvas placement="end" show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title as="h5">
            Your Cart
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column h-100">
            { (cartItems.length > 0 ? (
              <ListGroup as="ol" numbered>
                {cartItems.map((product) => (
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div 
                        className="fw-bold">{product.title} {" "}
                        <Badge bg="primary" pill>
                          {product.quantity}
                        </Badge>
                      </div>
                      ${product.price}
                    </div>
                    <Button onClick={() => removeFromCart({product})} variant="danger" className="mt-auto">
                        Remove
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            ) : (
              <div>Your Shopping Cart is empty</div>
            )) }
          </div>
          <Button variant="primary" className="mt-auto">
            Checkout
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
