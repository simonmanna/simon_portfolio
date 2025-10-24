import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Products from '../components/Products';
export default function Home() {
  return (
    <>
      <Head>
        <title>Brew & Bean - Premium Coffee Experience</title>
        <meta name="description" content="Discover the finest coffee blends and artisanal brewing methods" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Hero />
      <Products/>
      <About />
      <Contact />
      <Footer />
    </>
  );
}