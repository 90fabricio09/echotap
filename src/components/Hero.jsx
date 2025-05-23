import React from 'react';
import '../css/Hero.css';
import Counter from './Counter';
import Card from '../assets/Card.png';

const Hero = () => {
    return (
        <header className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        <span className="gradient-text">EchoTap</span>
                        <span className="hero-subtitle">Cartões de Visita Inteligentes</span>
                    </h1>
                    <p className="hero-description">
                        Transforme seu cartão de visita em uma experiência digital interativa com nossa tecnologia NFC inteligente. Conecte-se instantaneamente com seus clientes.
                    </p>
                    <div className="hero-cta">
                        <a href="https://wa.me/5511994921448" target='_blank' className="hero-button primary">
                            Comece Agora
                            <i className="bi bi-arrow-right"></i>
                        </a>
                        <a href="#" className="hero-button secondary">
                            <i className="bi bi-play-circle"></i>
                            Ver Demo
                        </a>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <Counter end={50} suffix="+" /> {/* duration={3000} */}
                            <span className="stat-label">Clientes Satisfeitos</span>
                        </div>
                        <div className="stat-item">
                            <Counter end={100} suffix="+" /> {/* duration={3000} */}
                            <span className="stat-label">Cartões Ativos</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Suporte</span>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="card-preview">
                        <img src={Card} alt="EchoTap Card" className="card-image" />
                    </div>
                    <div className="floating-elements">
                        <div className="floating-icon">
                            <i className="bi bi-phone"></i>
                        </div>
                        <div className="floating-icon">
                            <i className="bi bi-link-45deg"></i>
                        </div>
                        <div className="floating-icon">
                            <i className="bi bi-share"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </header>
    );
};

export default Hero; 