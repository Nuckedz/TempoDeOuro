import React, { useEffect, useState } from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

interface CardProps {
  nome: string;
  idade: number;
  att1: string;
  att2: string;
  att3: string;
  att4: string
}

const getImagem = async (nome: string) => {
  const storage = getStorage();
  const storageRef = ref(storage, `fotos/${nome}.jpg`);
  const url = await getDownloadURL(storageRef);
  return url;
}

const Card: React.FC<CardProps> = ({ nome, idade, att1, att2, att3, att4 }) => {
  const navigate = useNavigate();
  const [imageUrl, setImagemUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchImagem = async () => {
      try {
        const url = await getImagem(nome);
        setImagemUrl(url);
      } catch (error) {
        console.error("Error fetching image URL:", error);
      }
    };

    fetchImagem();
  }, [nome]);

  const handleSaibaMais = () => {
    navigate('/Participe', { state: { nome, idade, att1, att2, att3, att4, } });
  };

  return (
    <div className="card">
      <div className="imagemCard">
        <img src={imageUrl} alt={`Foto de ${nome}`} />
      </div>

      <div className="info">
        <h2>{nome}</h2>
        <p className="idade">{idade} anos </p>
        <p>Lar Doce Aconchego</p>
        
        <div className="line" />
        <p className="atividadesp">Atividades Preferidas:</p>
        <p className="atividades">{att1}</p>
        <p className="atividades">{att2}</p>
        <p className="atividades">{att3}</p>
        <p className="atividades">{att4}</p>
        <div className="line" />
        <button className="saiba-mais" onClick={handleSaibaMais}>
          SEJA UM VOLUNTÁRIO
        </button>
      </div>
    </div>
  );
};

export default Card;
