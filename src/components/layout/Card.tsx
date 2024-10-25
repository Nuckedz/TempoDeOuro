import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  nome: string;
  idade: number;
  att1: string;
  att2: string;
  att3: string;
  att4: string
}

const Card: React.FC<CardProps> = ({ nome, idade, att1, att2, att3, att4 }) => {
  const navigate = useNavigate();

  const handleSaibaMais = () => {
    navigate('/Participe', { state: { nome, idade, att1, att2, att3, att4 } });
  };

  return (
    <div className="card">
      <div className="imagemCard">
        <img src="/src/assets/Cecília.jpg" alt="Foto do Idoso" />
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
