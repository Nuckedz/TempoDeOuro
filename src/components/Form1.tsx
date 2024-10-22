import './Form1.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { firebaseApp } from './Firebase'; 

const Form1 = () => {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    email: '',
    celular: '',
    data: '',
    horario: '',
  });

  const db = getFirestore(firebaseApp); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await addDoc(collection(db, "colaboradores"), {
        nome: formData.nome,
        idade: formData.idade,
        email: formData.email,
        celular: formData.celular,
        dataNascimento: formData.data,
        horario: formData.horario,
      });
      console.log("Documento salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar documento: ", error);
    }

    
    setFormData({
      nome: '',
      idade: '',
      email: '',
      celular: '',
      data: '',
      horario: '',
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img src="img/img1.png" alt="Foto do usuário" className="rounded img-fluid perfil-img" />
            <h5 className="mt-3 carattere-font"><strong>Nome Sobrenome</strong></h5>
            <p className="carattere-font">xx anos</p>
            <p className="roboto-font"><strong>Atividades Preferidas:</strong></p>
            <ul className="list-unstyled roboto-font">
              <li>Atividade 1</li>
              <li>Atividade 2</li>
              <li>Atividade 3</li>
            </ul>
          </div>
          <div className="col-md-8 text-center">
            <h1>Seja um voluntário</h1> <br />
            <div className="form-container mx-auto">
              <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Digite seu nome"
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

                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />

                <label htmlFor="celular">Celular</label>
                <input
                  type="tel"
                  id="celular"
                  name="celular"
                  placeholder="Digite seu celular"
                  required
                  value={formData.celular}
                  onChange={handleChange}
                />

                <label htmlFor="data">Data</label>
                <input
                  type="date"
                  id="data"
                  name="data"
                  required
                  value={formData.data}
                  onChange={handleChange}
                />

                <label htmlFor="horario">Escolha um horário</label>
                <select
                  id="horario"
                  name="horario"
                  value={formData.horario}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Selecione</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                </select>

                <button type="submit">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Form1;
