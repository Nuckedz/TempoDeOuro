import './Participe.css';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './Firebase/FirebaseConn'; 

const AddIdoso = () => {
  const [formData, setFormData] = useState({
    nome: '',
    idade: 0,
    lar: '', // Novo campo "Lar"
    att1: '',
    att2: '',
    att3: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    try {
      await addDoc(collection(db, "idosos"), {
        nome: formData.nome,
        idade: formData.idade,
        lar: formData.lar, 
        att1: formData.att1,
        att2: formData.att2,
        att3: formData.att3,
      });
      console.log("Documento salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar documento: ", error);
    }
    
    setFormData({
      nome: '',
      idade: 0,
      lar: '', 
      att1: '',
      att2: '',
      att3: '',
    });
  };

  return (
    <div>
      <Navbar/>

      <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
        <div className="row align-items-center">
          <div className="col-lg">
            <h1>Adicione um Idoso</h1>
            <div className="form-container mx-auto">
              <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Digite o nome do idoso"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                />

                <label htmlFor="idade">Idade</label>
                <input
                  type="number"
                  id="idade"
                  name="idade"
                  placeholder="Digite sua idade"
                  required
                  value={formData.idade}
                  onChange={handleChange}
                />

                <label htmlFor="lar">Lar</label>
                <input
                  type="text"
                  id="lar"
                  name="lar"
                  placeholder="Digite o nome do lar"
                  required
                  value={formData.lar}
                  onChange={handleChange}
                />

                <label htmlFor="att1">Atividade 1</label>
                <input
                  type="text"
                  id="att1"
                  name="att1"
                  placeholder="Digite a 1º atividade"
                  required
                  value={formData.att1}
                  onChange={handleChange}
                />

                <label htmlFor="att2">Atividade 2</label>
                <input
                  type="text"
                  id="att2"
                  name="att2"
                  placeholder="Digite a 2º atividade"
                  required
                  value={formData.att2}
                  onChange={handleChange}
                />

                <label htmlFor="att3">Atividade 3</label>
                <input
                  type="text"
                  id="att3"
                  name="att3"
                  placeholder="Digite a 3º atividade"
                  required
                  value={formData.att3}
                  onChange={handleChange}
                />

                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default AddIdoso;
