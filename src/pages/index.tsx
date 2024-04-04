import Head from "next/head";
import Container from "react-bootstrap/Container";
import AppGuides from "@/components/AppGuides";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ItemList from "@/components/ItemList";

// This function fetches products and passes them as props to the Home component
export async function getStaticProps() {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();

  return { props: { products: data.products } };
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>E-Commerce</title>
        <meta name="description" content="This is a tech case study created by Tony Yu, UCLA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container as="main" className="py-4 px-3 mx-auto">
        <Header />

        <h1>E-Commerce App</h1>

        <ItemList products={products} />

        <hr className="col-1 my-5 mx-0" />

        <AppGuides />
        <Footer />
      </Container>
    </>
  );
}
