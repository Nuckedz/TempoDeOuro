import { getDownloadURL, getStorage, ref } from '@firebase/storage';
import './Navbar.css'; // Crie este arquivo CSS para estilizar a Navbar
import { useEffect, useState } from 'react';

const getLogoUrl = async (imgPath: string) => {
  const storage = getStorage();
  const storageRef = ref(storage, imgPath);
  return await getDownloadURL(storageRef);
}

const Navbar = () => {
  const [logoUrl, setLogoUrl] = useState<string>('');

  useEffect(() => {
    const fetchImages = async () => {
      try {

        setLogoUrl(await getLogoUrl('assets/logo.png'));

      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="navbar">

      <img className="logo" src={logoUrl} alt="Logo Tempo de Ouro"/>

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
