import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/Hero.css';
import mockupImage from '../assets/Mockup.png';
import demoVideo from '../assets/Video.mp4';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        // Hero sempre aparece imediatamente
        setIsVisible(true);
    }, []);

    const openVideo = () => {
        setIsVideoOpen(true);
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play().catch(() => {});
            }
        }, 50);
    };

    const closeVideo = () => {
        console.log('Fechando vídeo...');
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
        setIsVideoOpen(false);
    };

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeVideo();
            }
        };
        if (isVideoOpen) {
            document.addEventListener('keydown', onKeyDown);
        }
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [isVideoOpen]);

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
                            <button className="btn-apple btn-apple-secondary" onClick={openVideo}>
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
        {isVideoOpen && (
            <div className="video-overlay" onClick={closeVideo}>
                <div className="video-modal" onClick={(e) => e.stopPropagation()}>
                    <button 
                        className="video-close" 
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            closeVideo();
                        }} 
                        aria-label="Fechar vídeo"
                    >
                        <i className="bi bi-x-lg"></i>
                    </button>
                    <video ref={videoRef} className="video-player" controls playsInline>
                        <source src={demoVideo} type="video/mp4" />
                        Seu navegador não suporta vídeo HTML5.
                    </video>
                </div>
            </div>
        )}
        <div className="section-divider"></div>
        </>
    );
};

export default Hero;
