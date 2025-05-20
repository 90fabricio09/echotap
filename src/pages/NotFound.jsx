import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NotFound.css';

const NotFound = () => {
    return (
        <section className="notfound-section">
            <div className="notfound-content">
                <div className="notfound-text">
                    <h1 className="notfound-title">404</h1>
                    <p className="notfound-description">
                        Ops! Parece que você se perdeu. A página que você está procurando não existe ou foi movida.
                    </p>
                    <Link to="/" className="notfound-button">
                        Voltar para Home
                        <i className="bi bi-arrow-right"></i>
                    </Link>
                </div>
                <div className="notfound-visual">
                    <div className="card-preview">
                        <div className="card-front">
                            <div className="card-content">
                                <div className="card-info">
                                    <h1>EchoTap</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="floating-elements">
                        <div className="floating-icon">
                            <i className="bi bi-search"></i>
                        </div>
                        <div className="floating-icon">
                            <i className="bi bi-exclamation-circle"></i>
                        </div>
                        <div className="floating-icon">
                            <i className="bi bi-house"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
