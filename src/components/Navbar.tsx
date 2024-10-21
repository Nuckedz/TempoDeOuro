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
        <div className="nav-item">SOBRE NÓS</div>
        <div className="nav-item">NOSSOS LARES</div>
        <div className="nav-item">PARTICIPE</div>
        <div className="nav-item">CONTATO</div>
      </div>
      <div className="header">
        <div className="mdi-user">
        </div>
      </div>
    </div>
  );
};

export default Navbar;
