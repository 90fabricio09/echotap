import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import '../css/Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            
            // Detectar seção ativa
            const sections = ['hero', 'features', 'pricing', 'faq'];
            const scrollPosition = window.scrollY + 100;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;
                    const elementBottom = elementTop + rect.height;
                    
                    if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        closeMenu();
    };

    return (
        <nav className={`navbar-apple ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <img src={logoImage} alt="EchoTap" className="navbar-logo-img" />
                </Link>

                <div className={`navbar-menu ${isMenuOpen ? 'navbar-menu-active' : ''}`}>
                    <button className={`navbar-link ${activeSection === 'hero' ? 'active' : ''}`} onClick={() => scrollToSection('hero')}>
                        Início
                    </button>
                    <span className="navbar-separator">•</span>
                    <button className={`navbar-link ${activeSection === 'features' ? 'active' : ''}`} onClick={() => scrollToSection('features')}>
                        Recursos
                    </button>
                    <span className="navbar-separator">•</span>
                    <button className={`navbar-link ${activeSection === 'pricing' ? 'active' : ''}`} onClick={() => scrollToSection('pricing')}>
                        Preços
                    </button>
                    <span className="navbar-separator">•</span>
                    <button className={`navbar-link ${activeSection === 'faq' ? 'active' : ''}`} onClick={() => scrollToSection('faq')}>
                        FAQ
                    </button>
                    <span className="navbar-separator">•</span>
                    <a 
                        href="https://wa.me/5511931501833" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="navbar-link"
                    >
                        Contato
                    </a>
                </div>

                <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    {isMenuOpen ? (
                        <i className="bi bi-x"></i>
                    ) : (
                        <i className="bi bi-list"></i>
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
