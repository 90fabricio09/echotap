import React from 'react';
import '../css/Footer.css';
import Logo from '../assets/Logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <img src={Logo} alt="EchoTap Logo" className="footer-logo" />
                    <p className="footer-description">
                        Transforme sua forma de networking com tecnologia NFC. Compartilhe suas informações profissionais com um simples toque.
                    </p>
                    <div className="footer-social">
                        <a href="https://wa.me/5511994921448" target='_blank' className="social-link">
                            <i className="bi bi-whatsapp"></i>
                        </a>
                        <a href="https://www.instagram.com/echotapoficial/" target='_blank' className="social-link">
                            <i className="bi bi-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-divider"></div>
                <p className="footer-copyright">
                    &copy; 2025 EchoTap. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer; 