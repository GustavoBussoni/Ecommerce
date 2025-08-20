import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Nossa marca */}
        <div>
          <h3>NOSSA MARCA</h3>
          <a href="#">Sobre nós</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </div>

        {/* Informações */}
        <div>
          <h3>INFORMAÇÕES</h3>
          <a href="#">Sobre nós</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </div>

        {/* Ajuda e Suporte */}
        <div>
          <h3>AJUDA E SUPORTE</h3>
          <a href="#">Contato</a>
          <a href="#">FAQ</a>
          <a href="#">Suporte ao Cliente</a>
        </div>

        {/* Links organizados em colunas */}
        <div>
          <h3>CATEGORIAS</h3>
          <a href="#">Masculino</a>
          <a href="#">Feminino</a>
          <a href="#">Acessórios</a>
          <a href="#">Promoções</a>
        </div>

      </div>

      {/* Parte de baixo */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Minha Loja. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
