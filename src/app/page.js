import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Products from '../components/Products';
import Products2 from '../components/Products2';
export default function Home() {
  return (
    <>
      <Head>
        <title>Brew & Bean - Premium Coffee Experience</title>
        <meta name="description" content="Discover the finest coffee blends and artisanal brewing methods" />
        <link rel="icon" href="/coffee-icon.png" />
      </Head>
      {/* <Menu /> */}
      
      <Header />
      <Hero />
      <Products/>
      {/* <Products2/> */}
      <About />
      <Contact />
      <Footer />
    </>
  );
}