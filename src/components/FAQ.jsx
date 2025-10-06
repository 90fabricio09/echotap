import React, { useState, useEffect } from 'react';
import '../css/FAQ.css';

const FAQ = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [openIndex, setOpenIndex] = useState(0); // Primeiro item aberto por padrão

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

        const element = document.getElementById('faq');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const faqData = [
        {
            question: "Como funciona o EchoTap?",
            answer: "O EchoTap utiliza tecnologia NFC para permitir que você compartilhe suas informações de contato com um simples toque do cartão no smartphone. Não é necessário instalar nenhum aplicativo, basta aproximar o cartão do celular."
        },
        {
            question: "Quais informações posso compartilhar?",
            answer: "Você pode compartilhar todas as suas informações profissionais, como nome, telefone, email, redes sociais, site, portfólio e muito mais. Tudo é personalizável de acordo com suas necessidades."
        },
        {
            question: "O EchoTap funciona em qualquer smartphone?",
            answer: "Sim! O EchoTap funciona em qualquer smartphone que tenha tecnologia NFC, que é a maioria dos aparelhos Android e iPhone a partir do iPhone 7."
        },
        {
            question: "Como faço para comprar o meu cartão?",
            answer: "Para comprar seu cartão EchoTap, entre em contato conosco via WhatsApp ou Instagram. Envie as informações que deseja incluir no seu cartão e nossa equipe irá auxiliá-lo em todo o processo de personalização e compra."
        },
        {
            question: "É seguro compartilhar minhas informações?",
            answer: "Sim! Utilizamos tecnologia de criptografia avançada para proteger suas informações, além disso, você tem controle total sobre quais dados são compartilhados."
        },
        {
            question: "Quanto custa o EchoTap?",
            answer: "O EchoTap custa apenas R$ 69,90, incluindo o cartão físico, site personalizado e suporte 24/7. É um investimento único que dura anos e elimina a necessidade de imprimir cartões tradicionais."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className={`faq-apple ${isVisible ? 'faq-visible' : ''}`} id="faq">
            <div className="container-apple">
                <div className="faq-content">
                    <div className="faq-header">
                        <h2 className="faq-title">
                            <span className="faq-title-highlight">Perguntas</span> Frequentes
                        </h2>
                        <p className="faq-description">
                            Tire suas dúvidas sobre o EchoTap
                        </p>
                    </div>
                    
                    <div className="faq-accordion">
                        {faqData.map((item, index) => (
                            <div 
                                key={index} 
                                className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}
                            >
                                <button 
                                    className="faq-question"
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="faq-question-text">{item.question}</span>
                                    <span className="faq-icon">
                                        {openIndex === index ? (
                                            <i className="bi bi-dash"></i>
                                        ) : (
                                            <i className="bi bi-plus"></i>
                                        )}
                                    </span>
                                </button>
                                <div className="faq-answer">
                                    <div className="faq-answer-content">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
