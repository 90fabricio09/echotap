import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NotFound.css';

const NotFound = () => {
    return (
        
        <section className="notfound-apple">
            <div className="notfound-background">
                <div className="notfound-gradient"></div>
            </div>
            
            <div className="container-apple">
                <div className="notfound-content">
                    <div className="notfound-text">
                        <h1 className="notfound-title">404</h1>
                        <p className="notfound-description">
                            Ops! Parece que você se perdeu. A página que você está procurando não existe ou foi movida.
                        </p>
                        <Link to="/" className="btn-apple">
                            <i className="bi bi-arrow-left"></i>
                            Voltar para Home
                        </Link>
                    </div>
                    <div className="notfound-visual">
                        <div className="card-image-container">
                            <img src="/src/assets/Card.png" alt="EchoTap Card" className="card-image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
