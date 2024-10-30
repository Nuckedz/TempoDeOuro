import './Participe.css';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './Firebase/FirebaseConn'; 

const Participe = () => {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    email: '',
    celular: '',
    data: '',
    horario: '',
    companheiro: '',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        await addDoc(collection(db, "colaboradores"), {
            nome: formData.nome,
            idade: formData.idade,
            email: formData.email,
            celular: formData.celular,
            data: formData.data,
            horario: formData.horario,
            companheiro: formData.companheiro,
        });
        console.log("Documento salvo com sucesso!");
        
        // Defina a mensagem de sucesso
        setSuccessMessage("Formulário enviado com sucesso!");
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
        companheiro: '',
    });
};

  return (
    <div>

      <Navbar/>

      <div className="container-fluid d-flex align-items-center justify-content-center vh-100">

        <div className="row align-items-center">

          <div className="col-lg">

            <h1>Seja um voluntário</h1>

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

                <label htmlFor="companheiro">Quem é seu companheiro</label>
                    <select
                      id="companheiro"
                      name="companheiro"
                      value={formData.companheiro}
                      onChange={handleChange}
                      required
                    >
                    <option value="" disabled>Selecione</option>
                    <option value="Cecilia">Cecília</option>
                    <option value="Emilia">Emília</option>
                    <option value="Francisca">Francisca</option>
                    <option value="Ines">Inês</option>
                    <option value="MariaDeLourdes">Maria de Lourdes</option>
                    <option value="MariaMatilde">Maria Matilde</option>
                    </select>

                <label htmlFor="data">Data da Visita</label>
                <select
                  id="data"
                  name="data"
                  value={formData.data} // corrigido para 'data'
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Selecione</option>
                  <option value="Segunda-Feira">Segunda-Feira</option>
                  <option value="Terça-Feira">Terça-Feira</option>
                  <option value="Quarta-Feira">Quarta-Feira</option>
                  <option value="Quinta-Feira">Quinta-Feira</option>
                  <option value="Sexta-Feira">Sexta-Feira</option>

                </select>

                <label htmlFor="horario">Escolha um horário</label>
                <select
                  id="horario"
                  name="horario"
                  value={formData.horario}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Selecione</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                </select>

                <button type="submit">Enviar</button>
              </form>
              {successMessage && (
                    <div className="success-message">
                        {successMessage}
                    </div>
              )}
            </div>

          </div>

        </div>

      </div>

      <Footer/>

    </div>
  );
};

export default Participe;
