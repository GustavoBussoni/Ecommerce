import React, { useState, useEffect } from 'react';
import bandeira from '../assets/bandeira.png';
import { FaSearch, FaUser } from "react-icons/fa";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Faixa superior */}
      <div className="topbar">
        Promoção especial! Frete grátis acima de R$199
      </div>

      {/* Header principal */}
      <header className={`header ${active ? 'active' : ''}`}>
        <div className="header-content">

          {/* Esquerda */}
          <div className="header-left">
            <img src={bandeira} alt="Bandeira" className="flag"/>
            <div className="menu-links">
              <span>FEMININO</span>
              <span>MASCULINO</span>
              <span>KIDS</span>
            </div>
          </div>

          {/* Centro */}
          <div className="header-center">
            <div className="search-bar">
              <FaSearch className="icon" />
              <input type="text" placeholder="Procurar" />
            </div>
          </div>

          {/* Direita */}
          <div className="header-right">
            <FaUser className="icon" />
            <span>Entrar / Cadastrar</span>
          </div>

        </div>
      </header>
    </>
  );
};

export default Header;
