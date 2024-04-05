import Head from "next/head";
import Container from "react-bootstrap/Container";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ItemList from "@/components/ItemList";
import SearchBar from "@/components/SearchBar";
import { ShoppingCartProvider } from '@/components/ShoppingCartContext';
import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';


export async function getStaticProps() {
  const response = await fetch('https://dummyjson.com/products/');
  const data = await response.json();

  return { props: { products: data.products } };
}

export default function Home({ products }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState(products);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
    const data = await response.json();
    setItems(data.products);
  };

  return (
    <ShoppingCartProvider>
      <Head>
        <title>E-Commerce</title>
        <meta name="description" content="This is a tech case study created by Tony Yu, UCLA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Container as="main" className="py-4 px-3 mx-auto">
        <Header />

        <Form onSubmit={handleSubmit}>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={searchQuery}
                onChange={handleInputChange}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" className="mb-2">Search</Button>
            </Col>
          </Row>
        </Form>

        <br />

        <ItemList products={items} />

        <Footer />
      </Container>
    </ShoppingCartProvider>
  );
}
