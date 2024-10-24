import './Card.css';

interface CardProps {
  nome: string;
  idade: number;
  att1: string;
  att2: string;
  att3: string;
}

const Card: React.FC<CardProps> = ({ nome, idade, att1, att2, att3 }) => {
  return (
    <div className="card">

        <div>
          <img src="/src/assets/Inês.jpg" alt="Foto do Idoso"/>
        </div>

        <div className="info">

            <h2>{nome}</h2>

            <p className="idade">{idade} anos</p>

            <div className="line"/>

              <p className="atividadesp">Atividades Preferidas:</p>

              <p className="atividades">{att1}</p>
              <p className="atividades">{att2}</p>
              <p className="atividades">{att3}</p>

            <div className="line"/>

            <button className="saiba-mais">SAIBA MAIS</button>

        </div>
    </div>
  );
};

export default Card;
