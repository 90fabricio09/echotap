import React, { useState, useEffect, useRef } from 'react';
import '../css/FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        itemsRef.current.forEach(item => {
            if (item) {
                observer.observe(item);
            }
        });

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
            itemsRef.current.forEach(item => {
                if (item) {
                    observer.unobserve(item);
                }
            });
        };
    }, []);

    const faqs = [
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
            answer: "Para comprar seu cartão EchoTap, entre em contato conosco via WhatsApp ou Instagram. Envie as informações que deseja incluir no seu cartão e nossa equipe irá auxiliá-lo em todo o processo de personalização e compra.",
        },
        {
            question: "É seguro compartilhar minhas informações?",
            answer: "Sim! Utilizamos tecnologia de criptografia avançada para proteger suas informações, além disso, você tem controle total sobre quais dados são compartilhados."
        },
        {
            question: "Quanto custa o EchoTap?",
            answer: "Oferecemos diferentes planos para atender às suas necessidades, desde planos individuais até pacotes empresariais. Entre em contato conosco para conhecer as opções disponíveis."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section className="faq-section" id="faq" ref={sectionRef}>
            <div className="faq-container">
                <div className="faq-header">
                    <h2 className="faq-title">
                        <span className="gradient-text">Perguntas</span> Frequentes
                    </h2>
                    <p className="faq-subtitle">
                        Tire suas dúvidas sobre o EchoTap
                    </p>
                </div>
                <div className="faq-accordion">
                    {faqs.map((faq, index) => (
                        <div 
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
                            key={index}
                            ref={el => itemsRef.current[index] = el}
                        >
                            <button 
                                className="faq-question"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                            >
                                {faq.question}
                                <i className={`bi bi-${activeIndex === index ? 'dash' : 'plus'}`}></i>
                            </button>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ; 