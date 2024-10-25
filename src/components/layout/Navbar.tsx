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
        <a href="/Participe" className="nav-item">PARTICIPE</a>
        <a href="/" className="nav-item">SOBRE NÓS</a>
      </div>

      <div className="header">
        <div className="mdi-user"></div>
      </div>

    </div>
  );
};

export default Navbar;
