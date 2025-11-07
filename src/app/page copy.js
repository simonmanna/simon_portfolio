import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Uganda Gold Beans - Premium Coffee from the Pearl of Africa</title>
        <meta name="description" content="Premium green coffee beans and artisan roasted coffee directly from Ugandan farms. Wholesale supplier to roasters and distributors worldwide." />
        <meta name="keywords" content="Uganda coffee, green coffee beans, roasted coffee, wholesale coffee, Arabica, Robusta, specialty coffee" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Uganda Gold Beans - Premium Coffee" />
        <meta property="og:description" content="Premium coffee from Uganda's finest farms" />
        <meta property="og:type" content="website" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      
      <Header />
      <main>
        <Hero />
        {/* <Products />
        <About />
        <Process />
        <Testimonials />
        <Contact /> */}
      </main>
      <Footer />
    </>
  );
}