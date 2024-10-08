// src/components/Home.tsx
import './Home.css';
import Navbar from './Navbar'; // Importa o componente Navbar
import Footer from './Footer'; // Corrigido: use / ao invés de \

const Home = () => {
  return (
    <div>
      <Navbar /> {/* Adiciona a Navbar aqui */}

      {/* HERO */}
      <div className="banner">
        <div className="banner-content">
          <img src="src/assets/images/oldpeople.jpg" alt="Banner" className="banner-image" />
        </div>
      </div>

      {/* DEPOIMENTO */}
      <div className="Depoimento">
        <div className="Group2">
          <div className="Rectangle1" />
          <div className="depoimento-text">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
          </div>
          <div className="Fulano">Fulano</div>
          <div className="ParticipanteDaTempoDeOuro">Participante da Tempo de Ouro</div>
        </div>
      </div>

      {/* PASSOS */}
      <div className="Passos">
        <div className="ConecteGeracoes">
          <div className="titulo">Conecte gerações. Enriqueca histórias.</div>
          <div className="subtitulo">
            Visitas que transformam vidas e criam laços duradouros.
          </div>
        </div>

        <div className="retangulos">
          <div className="retangulo">
            <div className="icone">
              <img src="src/assets/images/1.png" alt="Coração" className="icon-image" />
            </div>
            <div className="titulo-rect">Escolha Seu Amigo</div>
            <div className="descricao">
              Explore os perfis dos idosos disponíveis e escolha aquele com quem você mais se identifica. Cada perfil contém uma breve descrição sobre seus hobbies, histórias de vida e preferências, ajudando você a encontrar a melhor conexão.
            </div>
          </div>

          <div className="retangulo">
            <div className="icone">
              <img src="src/assets/images/2.png" alt="Coração" className="icon-image" />
            </div>
            <div className="titulo-rect">Agende Sua Visita</div>
            <div className="descricao">
              Explore os perfis dos idosos disponíveis e escolha aquele com quem você mais se identifica. Cada perfil contém uma breve descrição sobre seus hobbies, histórias de vida e preferências, ajudando você a encontrar a melhor conexão.
            </div>
          </div>
        </div>

        <div className="retangulos">
          <div className="retangulo">
            <div className="icone">
              <img src="src/assets/images/3.png" alt="Coração" className="icon-image" />
            </div>
            <div className="titulo-rect">Prepare Um Presente ou Atividade</div>
            <div className="descricao">
              Oferecemos sugestões de presentes simples ou atividades, como leitura, jogos ou até mesmo uma conversa. Pequenos gestos fazem uma grande diferença no dia a dia do idoso.
            </div>
          </div>

          <div className="retangulo">
            <div className="icone">
              <img src="src/assets/images/4.png" alt="Coração" className="icon-image" />
            </div>
            <div className="titulo-rect">Acompanhe e Construa Laços</div>
            <div className="descricao">
              Após sua primeira visita, você pode continuar acompanhando o idoso, criando uma amizade duradoura. Nosso sistema permite que você envie mensagens, agende novas visitas e acompanhe o bem-estar dele.
            </div>
          </div>
        </div>
      </div>

      <div className="container-botao">
        <a href="caminho/da/sua/pagina.html" className="botao">Confira Nossos Amigos Aqui</a>
      </div>

      {/* SEÇÃO SOBRE NÓS */}
      <div className="sobre-nos">
        <div className="titulo">Sobre Nós</div>
        <div className="descricao">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </div>
      </div>

      {/* CONTATO */}
      <div className="contato">
        <div className="contato-conteudo">
          {/* Coluna para o ícone */}
          <div className="ic-baseline-phone">
            <div className="vector">
              <img src="src/assets/images/phone.png" alt="Ícone de Telefone" />
            </div>
          </div>

          {/* Coluna para os textos */}
          <div className="contato-textos">
            <div className="alguma-duvida">Alguma dúvida?</div>
            <div className="entre-em-contato">Entre em Contato</div>
            <div className="numero-telefone">41 99999-9999</div>
          </div>
        </div>
      </div>

      <Footer /> {/* Adiciona o Footer aqui */}
    </div>
  );
};

export default Home;
