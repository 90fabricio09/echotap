import React from 'react';

const NotFound = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
            color: '#2563eb',
            textAlign: 'center',
        }}>
            <h1 style={{ fontSize: '5rem', fontWeight: 800, marginBottom: '1rem' }}>404</h1>
            <h2 style={{ fontSize: '2rem', fontWeight: 600, marginBottom: '1rem' }}>Página não encontrada</h2>
            <p style={{ color: '#64748b', fontSize: '1.2rem', marginBottom: '2rem' }}>
                Opa! Parece que você tentou acessar uma página que não existe.
            </p>
            <a href="/" style={{
                background: '#2563eb',
                color: '#fff',
                padding: '0.9rem 2rem',
                borderRadius: '1rem',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '1.1rem',
                boxShadow: '0 4px 16px rgba(37,99,235,0.08)'
            }}>
                Voltar para o início
            </a>
        </div>
    );
};

export default NotFound;
