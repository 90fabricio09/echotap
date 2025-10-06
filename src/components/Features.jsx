import React, { useState, useEffect } from 'react';
import '../css/Features.css';

const Features = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const element = document.getElementById('features');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    return (
        <section className={`features-apple ${isVisible ? 'features-visible' : ''}`} id="features">
            <div className="container-apple">
                <div className="features-content">
                    <div className="features-header">
                        <h2 className="features-title">
                            Recursos que <span className="features-highlight">Transformam</span>
                        </h2>
                        <p className="features-description">
                            Descubra como o EchoTap pode revolucionar sua forma de networking
                        </p>
                    </div>
                    
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="bi bi-lightning"></i>
                            </div>
                            <h3 className="feature-title">Conecte Instantaneamente</h3>
                            <p className="feature-description">
                                Compartilhe suas informações de contato com um simples toque do cartão no smartphone.
                            </p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="bi bi-currency-dollar"></i>
                            </div>
                            <h3 className="feature-title">Economia Sustentável</h3>
                            <p className="feature-description">
                                Reduza custos com impressão e contribua para um mundo mais sustentável.
                            </p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="bi bi-people"></i>
                            </div>
                            <h3 className="feature-title">Networking Eficiente</h3>
                            <p className="feature-description">
                                Destaque-se em eventos e encontros profissionais com uma solução moderna e memorável.
                            </p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="bi bi-stars"></i>
                            </div>
                            <h3 className="feature-title">Experiência Moderna</h3>
                            <p className="feature-description">
                                Destaque-se com uma solução tecnológica que impressiona e transforma a forma de se conectar.
                            </p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="bi bi-shield-check"></i>
                            </div>
                            <h3 className="feature-title">Segurança Garantida</h3>
                            <p className="feature-description">
                                Tecnologia NFC segura e criptografada para proteger suas informações pessoais.
                            </p>
                        </div>
                        
                        <div className="feature-card">
                            <div className="feature-icon">
                                <i className="bi bi-globe"></i>
                            </div>
                            <h3 className="feature-title">Acessível em Qualquer Lugar</h3>
                            <p className="feature-description">
                                Seu cartão digital funciona em qualquer smartphone com NFC, sem necessidade de aplicativos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
