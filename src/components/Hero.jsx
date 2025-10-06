import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Hero.css';
import mockupImage from '../assets/Mockup.png';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Hero sempre aparece imediatamente
        setIsVisible(true);
    }, []);

    return (
        <>
        <section className="hero-apple" id="hero">
            <div className="hero-background">
                <div className="hero-gradient"></div>
            </div>
            
            <div className="container-apple">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            Transforme seu <span className="hero-highlight">cartão de visita</span> em uma experiência digital
                        </h1>
                        <p className="hero-description">
                            O EchoTap permite que você compartilhe suas informações de contato de forma moderna e profissional. 
                            Crie seu cartão digital personalizado e impressione seus clientes.
                        </p>
                        <div className="hero-buttons">
                            <a href='#pricing' className="btn-apple">
                                Comprar EchoTap 
                                <i className="bi bi-arrow-right"></i>
                            </a>
                            <button className="btn-apple btn-apple-secondary">
                                <i className="bi bi-play-circle"></i>
                                Ver Demonstração
                            </button>
                        </div>
                    </div>
                    
                    <div className="hero-visual">
                        <div className="hero-mockup">
                            <img src={mockupImage} alt="EchoTap Mockup" className="hero-mockup-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="section-divider"></div>
        </>
    );
};

export default Hero;
