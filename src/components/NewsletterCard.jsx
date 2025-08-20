import React, { useState } from 'react';

const NewsletterCard = () => {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setEnviado(true);
      setEmail('');
      // Aqui entraria a lógica real de envio (ex: API)
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h2>CADASTRE-SE NAS NOVIDADES</h2>
        <p>Fique por dentro das novidades, mudanças e promoções.</p>

        {!enviado ? (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">CADASTRE</button>
          </form>
        ) : (
          <p className="mensagem-sucesso">Obrigado por se inscrever! 💌</p>
        )}
      </div>
    </section>
  );
};

export default NewsletterCard;
