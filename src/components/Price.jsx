import React from 'react';
import '../css/Price.css';
import card from '../assets/Card.png';

const Price = () => {
    return (
        <div className="price-container" id="price">
            <div className="price-section">
                <div className="price-content-container">
                    <h2 className="price-title">
                        <span className="gradient-text">Conheça</span> o EchoTap
                    </h2>
                    <p className="price-description">
                        O cartão de visita inteligente que revoluciona a forma de fazer networking. 
                        Tecnologia NFC que conecta instantaneamente seus contatos ao seu perfil digital.
                    </p>
                    <img 
                        src={card} 
                        alt="EchoTap Imagem" 
                        className="price-image" 
                    />
                </div>
                <div className="pricing-cards-container">
                    {/* Plano Básico */}
                    <div className="pricing-card">
                        <span className="discount-badge">Mais Popular</span>
                        <div className="pricing-content">
                            <div className="pricing-icon">
                                <i className="bi bi-credit-card"></i>
                            </div>
                            <h3 className="pricing-plan">EchoTap</h3>
                            <div className="pricing-price">
                                <span className="price">R$ 49,90</span>
                                <span className="period">Valor no PIX</span>
                            </div>
                            <ul className="pricing-features">
                                <li><i className="bi bi-check-circle"></i> Cartão EchoTap</li>
                                <li><i className="bi bi-check-circle"></i> Site EchoTap</li>
                                <li><i className="bi bi-check-circle"></i> Tecnologia NFC</li>
                                <li><i className="bi bi-check-circle"></i> Suporte 24/7</li>
                            </ul>
                            <a href="https://wa.me/5511994921448" target="_blank" className="pricing-button">
                                Comprar Agora
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>

                    {/* Plano Personalizado */}
                    <div className="pricing-card">
                        <div className="pricing-content">
                            <div className="pricing-icon">
                                <i className="bi bi-stars"></i>
                            </div>
                            <h3 className="pricing-plan">EchoTap Personalizado</h3>
                            <div className="pricing-price">
                                <span className="price">R$ 79,90</span>
                                <span className="period">Valor no PIX</span>
                            </div>
                            <ul className="pricing-features">
                                <li><i className="bi bi-check-circle"></i> Cartão Personalizado</li>
                                <li><i className="bi bi-check-circle"></i> Site EchoTap Personalizado</li>
                                <li><i className="bi bi-check-circle"></i> Tecnologia NFC</li>
                                <li><i className="bi bi-check-circle"></i> Suporte 24/7</li>
                                <li><i className="bi bi-check-circle"></i> Design Exclusivo</li>
                            </ul>
                            <a href="https://wa.me/5511994921448" target="_blank" className="pricing-button">
                                Comprar Agora
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price; 

