// src/components/Navbar.tsx
import './Navbar.css'; // Crie este arquivo CSS para estilizar a Navbar

const Navbar = () => {
  return (
    <div className="navbar">
      <img 
        className="logo" 
        src="src/assets/images/logo.png" // Corrija o caminho conforme necessário
        alt="Logo Tempo de Ouro" 
      />
      <div className="nav-items">
        <a href="#sobrenos"><div className="nav-item">SOBRE NÓS</div></a>
        <a href="#nossoslares"><div className="nav-item">NOSSOS LARES</div></a>
        <a href="#"><div className="nav-item">PARTICIPE</div></a>
        <a href="#contato"><div className="nav-item">CONTATO</div></a>
      </div>
      <div className="header">
      </div>
    </div>
  );
};

export default Navbar;
