import React from 'react';
import Navbar from '../components/Navbar';
import Chat from '../components/Chat';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Chat />
            <Hero />
            <Features />
            <Pricing />
            <FAQ />
            <Footer />
        </>
    );
};

export default Home;
