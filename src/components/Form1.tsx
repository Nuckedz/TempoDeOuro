// src/components/Form1.tsx
import './Form1.css';
import Navbar from './Navbar'; // Importa o componente Navbar
import Footer from './Footer'; // Corrigido: use / ao invés de \

const Form1 = () => {
  return (
    <div>
      <Navbar /> {/* Adiciona a Navbar aqui */}
   
      <div class="container d-flex align-items-center justify-content-center vh-100">
    <div class="row align-items-center">
      <div class="col-md-4 text-center">
       
        <img src="img/img1.png" alt="Foto do usuário" class="rounded img-fluid perfil-img">
        <h5 class="mt-3 carattere-font"><strong>Nome Sobrenome</strong></h5>
        <p class="carattere-font">xx anos</p>
        <p class="roboto-font"><strong>Atividades Preferidas:</strong></p>
        <ul class="list-unstyled roboto-font">
          <li>Atividade 1</li>
          <li>Atividade 2</li>
          <li>Atividade 3</li>
        </ul>
      </div>
      <div class="col-md-8 text-center">
        <h1>Seja um voluntário</h1> <br>
        <div class="form-container mx-auto"> 
          <form>
            <label for="nome">Nome</label>
            <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required> 

            <label for="idade">Idade</label>
            <input type="number" id="idade" name="idade" placeholder="Digite sua idade" required>

            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required>

            <label for="celular">Celular</label>
            <input type="tel" id="celular" name="celular" placeholder="Digite seu celular" required>

            <label for="data">Data</label>
            <input type="date" id="data" name="data" required>

            <label for="horario">Escolha um horário</label>
            <select id="time" name="horario" required>
              <option value="" disabled selected>Selecione</option>
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
  
  <Footer /> {/* Adiciona o Footer aqui */}
    </div>
  );
};

export default Form1;