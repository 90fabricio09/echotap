import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ImgChat from '../assets/image.png'
import '../css/Chat.css'

function Chat() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const aba = document.getElementById('aba');
        if (isOpen) {
            aba.style.display = 'block';
            setTimeout(() => {
                aba.style.opacity = 1;
            }, 1);
        } else {
            aba.style.opacity = 0;
            setTimeout(() => {
                aba.style.display = 'none';
            }, 300);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const window = document.querySelector('.window');
            const toggleButton = document.getElementById('toggleButton');
            
            // Verifica se o clique foi fora do componente window e se o ticket está aberto
            if (isOpen && window && !window.contains(event.target) && !toggleButton.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // Adiciona o event listener quando o ticket está aberto
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Remove o event listener quando o componente é desmontado ou o ticket é fechado
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Animação de entrada do botão
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500); // Delay de 500ms após carregar a página

        return () => clearTimeout(timer);
    }, []);

    const toggleAba = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="window">
                <button id="toggleButton" className={`btn-sup ${isVisible ? 'btn-visible' : 'btn-hidden'}`} onClick={toggleAba}>
                    <i id="icon1" className="bi bi-chat-fill" style={{ display: isOpen ? 'none' : 'inline' }}></i>
                    <i id="icon2" className="bi bi-x-lg" style={{ display: isOpen ? 'inline' : 'none' }}></i>
                </button>
                <div id="aba" className="aba" style={{ opacity: 0, transition: 'opacity 300ms ease' }}>
                    <img className="sup_image" src={ImgChat} alt="Imagem Suporte" />
                    <h2>Olá<span>!</span> Como podemos te ajudar<span>?</span></h2>
                    <div className="global-content">
                        <div className="content-sup">
                            <a href="https://wa.me/5511931501833" target="_blank">
                                <h3>Contato via WhatsApp</h3>
                                <p>Normalmente respondemos em até 10 min.</p>
                                <i className="bi bi-whatsapp"></i>
                            </a>
                        </div>
                        <div className="content-sup">
                            <a href="https://www.instagram.com/echotapoficial/" target="_blank">
                                <h3>Nosso Instagram</h3>
                                <p>Venha nos conhecer mais de perto.</p>
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <p>Caso necessite de assistência, sinta-se à vontade para interagir com uma das opções disponíveis acima. Estamos à sua disposição.</p>
                </div>
            </div>
        </>
    );
}

export default Chat;