import './Card.css';

const Card = () => {
  return (
    <div className="card">
        <div>
        <img src="../TempoDeOuro/images/Idoso 1.png" alt="Foto do Idoso"/>
        </div>
        <div className="info">
            <h2>Nome Sobrenome</h2>
            <p className="idade">xx anos</p>
            <div className="line"></div>
            <p className="atividadesp">Atividades Preferidas:</p>
            <p className="atividades">Atividade 1</p>
            <p className="atividades">Atividade 2</p>
            <p className="atividades">Atividade 3</p>
            <div className="line"></div>
            <button className="saiba-mais">SAIBA MAIS</button>
        </div>
    </div>
  );
};

export default Card;
