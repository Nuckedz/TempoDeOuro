// src/components/Footer.tsx
import { useEffect, useState } from 'react';
import { getDownloadURL, getStorage, ref } from '@firebase/storage';
import './Footer.css';


const getLogoUrl = async (imgPath: string) => {
  const storage = getStorage();
  const storageRef = ref(storage, imgPath);
  return await getDownloadURL(storageRef);
}
const Footer = () => {

  const [logoUrl, setLogoUrl] = useState<string>('');

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const url = await getLogoUrl('assets/logo.png');
        setLogoUrl(url);
      } catch (error) {
        console.error("Error fetching footer logo:", error);
      }
    };

    fetchLogo();
    
  }, []);
  return (
    <div className="footer">
      <div className="footer-column logo-column">
        <img
          className="logo-tempo-de-ouro"
          src={logoUrl} alt="Logo Tempo de Ouro"
        />
      </div>

      <div className="footer-column description-column">
        <div className="descricao">
          Conectando gerações, promovendo companhia e suporte aos idosos de Curitiba. Junte-se a nós para tornar o envelhecimento mais digno e feliz através do voluntariado.
        </div>
      </div>

      <div className="footer-column navigation-column">
        <div className="navegue-por-aqui">Navegue Por Aqui</div>
        <a href="/Participe"><div className="navegacao-item">Participe</div></a>
        
        <a href="/"><div className="navegacao-item">Sobre Nós</div></a>
        
      </div>

      <div className="footer-column address-column">
        <div className="endereco">
          <div className="lar-titulo">Lar Doce Aconchego</div>
          <div className="endereco-lar">
            Rua Padre Arnaldo Janssen, 220, Jd. Acrópole Cajuru - Curitiba
          </div>
          <div className="lar-titulo">Lar Arte e Cuidar</div>
          <div className="endereco-lar">
            Rua Major Theolindo Ferreira Ribas, 2801, Hauer - Curitiba
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
