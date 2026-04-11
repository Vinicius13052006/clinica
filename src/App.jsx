import React from 'react';
import './App.css';

function App() {
  return (
    <div className="main-container">
      {/* Background Glows decorativos */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <nav className="nav-bar">
        <div className="nav-inner">
          <div className="brand">VET<span>CORE</span></div>
          <div className="nav-actions">
            <a href="#about">Tecnologia</a>
            <a href="#services">Serviços</a>
            <button className="btn-cta-nav">BOOK NOW</button>
          </div>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-text">
          <div className="hero-badge">Next-Gen Veterinary Care</div>
          <h1>PRECISÃO <br/> <span>ANIMAL.</span></h1>
          <p>Elevando o padrão da medicina veterinária com diagnósticos digitais e cuidado de alta performance.</p>
          <div className="hero-group">
            <button className="btn-main">EXPLORAR CLÍNICA</button>
            <div className="status-container">
              <div className="pulse-dot"></div>
              <span>SISTEMAS ONLINE</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="grid-section">
        <div className="card-premium">
          <div className="card-number">01</div>
          <h3>CIRURGIA HD</h3>
          <p>Procedimentos guiados por imagem de alta definição e recuperação acelerada.</p>
        </div>
        <div className="card-premium active">
          <div className="card-number">02</div>
          <h3>LAB 24H</h3>
          <p>Resultados moleculares processados em tempo real com entrega via Cloud.</p>
        </div>
        <div className="card-premium">
          <div className="card-number">03</div>
          <h3>UTI 4.0</h3>
          <p>Monitoramento contínuo de sinais vitais com alertas inteligentes.</p>
        </div>
      </section>

      <footer className="simple-footer">
        <p>VETCORE © 2026 // DESIGNED FOR THE FUTURE</p>
      </footer>
    </div>
  );
}

export default App;