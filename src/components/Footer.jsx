import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-apple">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="footer-logo">
                            <h3>EchoTap</h3>
                            <p>Cartões de Visita Inteligentes</p>
                        </div>
                        <p className="footer-description">
                            Transforme seu networking com tecnologia NFC. 
                            Compartilhe suas informações de forma moderna e profissional.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Links Rápidos</h4>
                        <ul className="footer-links">
                            <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Início</Link></li>
                            <li><a href="#features" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>Recursos</a></li>
                            <li><a href="#pricing" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>Preços</a></li>
                            <li><a href="#faq" onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}>FAQ</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contato</h4>
                        <div className="footer-contact">
                            <div className="footer-contact-item">
                                <i className="bi bi-envelope"></i>
                                <a href="mailto:contato@echotap.com.br">contato@echotap.com.br</a>
                            </div>
                            <div className="footer-contact-item">
                                <i className="bi bi-whatsapp"></i>
                                <a href="https://wa.me/5511931501833" target="_blank" rel="noopener noreferrer">
                                    (11) 93150-1833
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Redes Sociais</h4>
                        <div className="footer-social">
                            <a href="https://wa.me/5511931501833" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                <i className="bi bi-whatsapp"></i>
                            </a>
                            <a href="https://instagram.com/echotapoficial" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>&copy; 2025 EchoTap. Todos os direitos reservados.</p>
                        <div className="footer-bottom-links">
                            <a href="https://config.echotap.com.br" target="_blank" rel="noopener noreferrer">Configurar Cartão</a>
                            <span>•</span>
                            <a href="https://wa.me/5511931501833" target="_blank" rel="noopener noreferrer">Suporte</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
