import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Pricing.css';

const Pricing = () => {
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

        const element = document.getElementById('pricing');
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
        <section className={`about-apple ${isVisible ? 'about-visible' : ''}`} id="pricing">
            <div className="container-apple">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="about-title">
                            Conheça o <span className="about-highlight">EchoTap</span>
                        </h2>
                        <p className="about-description">
                            O cartão de visita inteligente que revoluciona a forma de fazer networking. 
                            Tecnologia NFC que conecta instantaneamente seus contatos ao seu perfil digital.
                        </p>
                        <div className="about-card-preview">
                            <img src="/src/assets/Card.png" alt="EchoTap Card" className="about-card-image" />
                        </div>
                    </div>
                    
                    <div className="about-pricing">
                        <div className="pricing-card">
                            <div className="pricing-badge">
                                <span>Mais Popular</span>
                            </div>
                            <div className="pricing-content">
                                <div className="pricing-icon">
                                    <i className="bi bi-credit-card"></i>
                                </div>
                                <h3 className="pricing-title">EchoTap</h3>
                                <div className="pricing-price">
                                    <span className="price-value">R$ 69,90</span>
                                </div>
                                <ul className="pricing-features">
                                    <li>
                                        <i className="bi bi-check-circle"></i>
                                        <span>Cartão EchoTap</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle"></i>
                                        <span>Site EchoTap</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle"></i>
                                        <span>Tecnologia NFC</span>
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle"></i>
                                        <span>Suporte 24/7</span>
                                    </li>
                                </ul>
                                <a href="https://www.tiktok.com/view/product/1732648389606475669?encode_params=MIIBugQM60cqRMa8Zmik2FCDBIIBlkUdFdW0xg9vdHa3z-E9hv9SFLvo3aAkMdkIfxvnOQO7RFSCdHPGiDZy39BsgBkUgO_TBCVV2T7gbUs4ltWLG7SGvWb580Qbd1wQIJ-gculp459jbUwrFd-w76smO7reOS4RlsQ98I0q9MHSaCrusiWjktDMQQeYVS0ymP3bYrcDjOOLAB-D2c-oz3-8UZMe6TFAZV5TC_1qtuW7urzQ42ma4DQ2vfwtwZTfMl6IZeMWio_wzWGwaUGegITMwvicQ830mVQlXD6ygh_GgGxtDHZB0bq-FbN43i3jn3jSVkNqOSPOxBXbTZ6HRV266uDZLqpr_PxPv2qtaPyJ4whgdPU2UfQZfENwOlP92lRE9apaRcd66NBLPWMpyMpQy10Mdrpl7nDP9QyKu6KU3IoUfepZiF8OFBzCMdvnBqn_D-ynPzAiSRr3io7E6m5aRCW_Lgpjzv1ydBuNS2h-7IZUpBo0LxbLQEzekMK5bjcsdFLOKWVC71jNZ3PysaBAiAnBS7mD49rzLh8ES1QYj5F8nny93IkSBzcEEBENLV23LfQ-PMJMWGPzbEg%3D&region=BR&locale=en&source=seller_center&hide_tips=&no-cache=1&e=1" target='_blank' className="pricing-button">
                                    Comprar Agora
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
