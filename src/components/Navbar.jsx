import React, { useState, useEffect } from 'react';
import '../css/Navbar.css';
import Logo from '../assets/LogoPng.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">
                        <img src={Logo} alt="EchoTap Logo" />
                    </a>
                </div>

                <button 
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="navbar-links">
                        <li><a href="#" onClick={handleLinkClick}>Início</a></li>
                        <li><a href="#features" onClick={handleLinkClick}>Recursos</a></li>
                        <li><a href="#price" onClick={handleLinkClick}>Adquirir</a></li>
                        <li><a href="#faq" onClick={handleLinkClick}>Dúvidas</a></li>
                    </ul>
                    <div className="navbar-buttons">
                        {/* <button className="nav-button login">Entrar</button> */}
                        <a href='https://wa.me/5511994921448' target='_blank' className="nav-button register" onClick={handleLinkClick}>Contato</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 