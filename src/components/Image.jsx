import React from 'react';
import '../css/Image.css';
import Imagem from '../assets/VisitingCard.png';

const Image = () => {
    return (
        <div className="parallax-container">
            <div className="info-section">
                <img 
                    src={Imagem} 
                    alt="EchoTap imagem" 
                    className="info-image" 
                />
                <div className="info-content">
                    <h2>Transforme sua Experiência Digital</h2>
                    <p>
                        Descubra uma nova maneira de interagir com o mundo digital. 
                        Nossa tecnologia inovadora oferece soluções personalizadas 
                        para suas necessidades, combinando design moderno com 
                        funcionalidade excepcional.
                    </p>
                    <p>
                        Com a EchoTap, você tem acesso a ferramentas poderosas que 
                        transformam a maneira como você se conecta e se comunica 
                        no ambiente digital.
                    </p>
                    <a href="#faq" className="info-button">
                        Saiba Mais
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Image; 