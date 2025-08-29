import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/page/Header';
import Hero from '@/components/page/Hero';
import About from '@/components/page/About';
import Services from '@/components/page/Services';
import Board from '@/components/page/Board';
import Management from '@/components/page/Management';
import Products from '@/components/page/Products';
import Contact from '@/components/page/Contact';
import Footer from '@/components/page/Footer';

function App() {
  const { toast } = useToast();

  const handleNotImplemented = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 3000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Yobe fertilizer Blending Company - Empowering Farmers, Enriching Soil</title>
        <meta name="description" content="Leading fertilizer blending company in Nigeria since 2003. We provide NPK fertilizers, urea, soil analysis, and custom blends to boost agricultural productivity and food security." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header handleNotImplemented={handleNotImplemented} />
        <main>
          <Hero handleNotImplemented={handleNotImplemented} />
          <About />
          <Services />
          <Board />
          <Management />
          <Products />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;