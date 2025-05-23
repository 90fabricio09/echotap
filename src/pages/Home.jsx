import React from 'react';
import Navbar from '../components/Navbar';
import Ticket from '../components/Ticket';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Price from '../components/Price';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Ticket />
            <Hero />
            <Features />
            <Price />
            <FAQ />
            <Footer />
        </>
    );
};

export default Home;
