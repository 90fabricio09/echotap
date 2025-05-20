import React from 'react';
import '../css/Features.css';

const Features = () => {
    const features = [
        {
            icon: "bi bi-lightning-charge",
            title: "Conecte Instantaneamente",
            description: "Compartilhe suas informações de contato com um simples toque do cartão no smartphone."
        },
        {
            icon: "bi bi-graph-up-arrow",
            title: "Acompanhe Interações",
            description: "Monitore quantas pessoas visualizaram seu perfil e quais informações foram acessadas."
        },
        {
            icon: "bi bi-shield-check",
            title: "Segurança Garantida",
            description: "Tecnologia NFC segura e criptografada para proteger suas informações pessoais."
        },
        {
            icon: "bi bi-palette",
            title: "Design Personalizado",
            description: "Crie um cartão único com sua identidade visual e informações personalizadas."
        },
        {
            icon: "bi bi-globe",
            title: "Acessível em Qualquer Lugar",
            description: "Seu cartão digital funciona em qualquer smartphone com NFC, sem necessidade de aplicativos."
        },
        {
            icon: "bi bi-currency-dollar",
            title: "Economia Sustentável",
            description: "Reduza custos com impressão e contribua para um mundo mais sustentável."
        }
    ];

    return (
        <section className="features-section" id="features">
            <div className="features-container">
                <div className="features-header">
                    <h2 className="features-title">
                        <span className="gradient-text">Recursos</span> que Transformam
                    </h2>
                    <p className="features-subtitle">
                        Descubra como o EchoTap pode revolucionar sua forma de networking
                    </p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">
                                <i className={feature.icon}></i>
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features; 