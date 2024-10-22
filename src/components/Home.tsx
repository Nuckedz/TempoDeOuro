// src/components/Home.tsx
import './Home.css';
import Navbar from './Navbar';
import Footer from './Footer'; 

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <div className="banner">
        <img src="src/assets/images/banner.png" alt="Banner" className="banner-image" />
      </div>

      {/* DEPOIMENTO */}
      <div className="depoimento">
        <div className="group">
          <div className="rectangle" />
          <div className="text">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
          </div>
          <div className="name">Fulano</div>
          <div className="role">Participante da Tempo de Ouro</div>
        </div>
      </div>

      {/* PASSOS */}
      <div className="passos">
        <div className="titulo">Conecte gerações. Enriqueca histórias.</div>
        <div className="subtitulo">Visitas que transformam vidas e criam laços duradouros.</div>

        <div className="passos-grid">
          {['Escolha Seu Amigo', 'Agende Sua Visita', 'Prepare Um Presente ou Atividade', 'Acompanhe e Construa Laços'].map((title, index) => (
            <div className="passo" key={index}>
              <div className="icon">
                <img src={`src/assets/images/${index + 1}.png`} alt="Ícone" className="icon-image" />
              </div>
              <div className="passo-titulo">{title}</div>
              <div className="passo-descricao">
                {title === 'Escolha Seu Amigo' ? 'Explore os perfis dos idosos disponíveis e escolha aquele com quem você mais se identifica. Cada perfil contém uma breve descrição sobre seus hobbies, histórias de vida e preferências, ajudando você a encontrar a melhor conexão.' : 
                title === 'Agende Sua Visita' ? 'Reserve um tempo para uma visita especial, onde você poderá conhecer mais sobre a história e a sabedoria do seu amigo, fortalecendo laços que podem durar para sempre.' :
                title === 'Prepare Um Presente ou Atividade' ? 'Oferecemos sugestões de presentes simples ou atividades, como leitura, jogos ou até mesmo uma conversa. Pequenos gestos fazem uma grande diferença no dia a dia do idoso.' :
                'Após sua primeira visita, você pode continuar acompanhando o idoso, criando uma amizade duradoura. Nosso sistema permite que você envie mensagens, agende novas visitas e acompanhe o bem-estar dele.'}
              </div>
            </div>
          ))}
        </div>
        <div className="container-botao">
          <a href="caminho/da/sua/pagina.html" className="botao">Confira Nossos Amigos Aqui</a>
        </div>
      </div>

        
  

      {/* SEÇÃO SOBRE NÓS */}
      <div id="sobrenos" className="sobre">
        <div className="titulo">Sobre Nós</div>
        <div className="descricao">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>


      {/* SEÇÃO LARES */}
      <div className="lares" id='nossoslares'>
        <div className="lar">
          <h2 className="titulo">Lar Doce Aconchego</h2>
          <div className="imagens">
            <img src="src/assets/images/lar1-1.png" alt="Imagem do Lar Doce Aconchego 1" className="imagem" />
            <img src="src/assets/images/lar1-2.png" alt="Imagem do Lar Doce Aconchego 2" className="imagem" />
          </div>
          <div className="descricao">
            <p>
              O Lar Doce Aconchego Curitiba é uma instituição que se destaca por seu compromisso com a qualidade de vida dos idosos. Localizado em um ambiente tranquilo, o lar oferece um espaço acolhedor, ideal para aqueles que buscam um lugar seguro e cheio de carinho.
            </p>
            <p>
              A equipe de profissionais é composta por enfermeiros, cuidadores e terapeutas que trabalham em conjunto para atender às necessidades de cada residente, sempre priorizando a individualidade e o respeito. Com um foco na promoção da saúde física e mental, o lar oferece atividades recreativas, sociais e terapias, contribuindo para o bem-estar e a socialização dos idosos.
            </p>
            <p>
              A alimentação é outro ponto forte do Lar Doce Aconchego, que conta com um cardápio balanceado e adaptado às necessidades nutricionais de cada morador, garantindo refeições saborosas e saudáveis.
            </p>
            <p>
              Além disso, o lar valoriza a interação familiar e a criação de laços afetivos, promovendo visitas regulares e eventos que incentivam a participação dos familiares nas atividades. Com um ambiente familiar e acolhedor, o Lar Doce Aconchego Curitiba é mais do que um asilo; é um verdadeiro lar onde os idosos podem desfrutar de segurança, respeito e amor na terceira idade.
            </p>
          </div>

        </div>

        <div className="lar">
          <h2 className="titulo">LAR 2</h2>
          <div className="imagens">
            <img src="src/assets/images/lar1-1.png" alt="Imagem LAR 2" className="imagem" />
            <img src="src/assets/images/lar1-2.png" alt="Imagem LAR 2" className="imagem" />
          </div>
          <div className="descricao">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id distinctio nesciunt atque quis adipisci. Eos non, perferendis odit commodi quam ipsum reiciendis! Saepe, tempora aspernatur delectus iste tenetur eum perspiciatis.
          </div>
        </div>
      </div>



      {/* CONTATO */}
      <div className="contato">
        <div className="contato-conteudo">
          <div className="ic-phone">
            <img src="src/assets/images/phone.png" alt="Ícone de Telefone" />
          </div>
          <div className="contato-textos">
            <div className="alguma-duvida" id='contato'>Alguma dúvida?</div>
            <div className="entre-em-contato">Entre em Contato</div>
            <div className="numero-telefone">41 99999-9999</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
