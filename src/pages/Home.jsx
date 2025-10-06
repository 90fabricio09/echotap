import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ChatButton from '../components/ChatButton';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Pricing />
            <FAQ />
            <Footer />
            <ChatButton />
        </>
    );
};

export default Home;
