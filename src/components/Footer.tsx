// src/components/Footer.tsx
import './Footer.css'; // Importa o arquivo CSS separado

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-column logo-column">
        <img
          className="logo-tempo-de-ouro"
          src="src/assets/images/logo.png"
          alt="Logo Tempo de Ouro"
        />
      </div>

      <div className="footer-column description-column">
        <div className="descricao">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>

      <div className="footer-column navigation-column">
        <div className="navegue-por-aqui">Navegue Por Aqui</div>
        <a href="#"><div className="navegacao-item">Participe</div></a>
        <a href="#nossoslares"><div className="navegacao-item">Nossos Lares</div></a>
        <a href="#sobrenos"><div className="navegacao-item">Sobre Nós</div></a>
        <a href="#contato"><div className="navegacao-item">Contato</div></a>
      </div>

      <div className="footer-column address-column">
        <div className="endereco">
          <div className="lar-titulo">Lar Doce Aconchego</div>
          <div className="endereco-lar">
            Rua Padre Arnaldo Janssen, 220, Jd. Acrópole Cajuru - Curitiba
          </div>
          <div className="lar-titulo">Lar 2</div>
          <div className="endereco-lar">
            Rua Endereco do Lar 2, 1234, Bairro, Cidade, UF, 0000-000
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
