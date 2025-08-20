import React from 'react';
import heroImage from '../assets/hero.jpg'; // Coloque uma imagem na pasta assets

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroImage} alt="Banner da Loja" className="hero-image" />
      <div className="hero-text">
        <h1>Moda que te representa</h1>
        <p>Descubra as últimas tendências com conforto e estilo.</p>
      </div>
    </section>
  );
};

export default Hero;
