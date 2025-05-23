import React from 'react';
import '../css/Price.css';
import Imagem from '../assets/VisitingCard.png';

const Price = () => {
    return (
        <div className="price-container">
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
                        src={Imagem} 
                        alt="EchoTap imagem" 
                        className="price-image" 
                    />
                </div>
                <div className="pricing-card">
                    <span className="discount-badge">30% OFF</span>
                    <div className="pricing-content">
                        <div className="pricing-icon">
                            <i className="bi bi-credit-card"></i>
                        </div>
                        <h3 className="pricing-plan">EchoTap Card</h3>
                        <div className="pricing-price">
                            <span className="original-price">R$ 100,00</span>
                            <span className="price">R$ 70,00</span>
                            <span className="period">investimento único</span>
                        </div>
                        <ul className="pricing-features">
                            <li><i className="bi bi-check-circle"></i> Sem mensalidades</li>
                            <li><i className="bi bi-check-circle"></i> Tecnologia NFC</li>
                            <li><i className="bi bi-check-circle"></i> Suporte 24/7</li>
                        </ul>
                        <a href="https://wa.me/5511994921448" target="_blank" className="pricing-button">
                            Comprar Agora
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price; 