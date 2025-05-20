import React from 'react';
import Navbar from '../components/Navbar';
import Ticket from '../components/Ticket';
import Hero from '../components/Hero';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Ticket />
            <Hero />
            <Features />
            <FAQ />
            <Footer />
        </>
    );
};

export default Home;
