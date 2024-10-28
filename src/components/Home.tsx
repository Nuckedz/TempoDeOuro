// src/components/Home.tsx
import './Home.css';
import Navbar from './layout/Navbar'; // Importa o componente Navbar
import Footer from './layout/Footer'; // Corrigido: use / ao invés de \

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
            “Participar deste projeto me permitiu ver um ‘lado da moeda’ que ganha pouca atenção, mas que demanda muito carinho e empatia. Estar lá me fez refletir sobre a valorização da família, o autocuidado e, principalmente, o respeito aos mais vulneráveis.”
          </div>
          <div className="name">Maitê Góis</div>
          <div className="role">Voluntária do Tempo de Ouro</div>
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
        
      </div>

      <div className="container-botao">
          <a href="/Lista" className="botao">Confira Nossos Amigos Aqui</a>
      </div>

      {/* SEÇÃO SOBRE NÓS */}
      <div id="sobrenos" className="sobre">
        <div className="titulo">Sobre Nós</div>
        <div className="descricao">
          <p>
            Somos um grupo de estudantes de comunicação dedicados a melhorar a vida dos idosos em Curitiba. Nosso projeto surgiu para aumentar a visibilidade do voluntariado e fortalecer a conexão entre jovens e idosos. 
          </p>
          <p>
            Buscamos reunir pessoas apaixonadas por ajudar, promovendo o apadrinhamento de idosos para oferecer companhia, suporte e contribuir para um envelhecimento mais digno e feliz.
          </p>
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
              O Lar Doce Aconchego é uma instituição dedicada à qualidade de vida dos idosos, oferecendo um ambiente seguro e acolhedor. Com uma equipe de enfermeiros, cuidadores e terapeutas, o lar atende às necessidades individuais dos residentes, promovendo saúde física e mental por meio de atividades recreativas e terapias. 
            </p>
            <p>
              A alimentação é balanceada e adaptada para atender às necessidades nutricionais de cada idoso. O lar também valoriza a interação familiar, promovendo visitas e eventos para fortalecer os laços afetivos. É um espaço onde os idosos encontram segurança, respeito e carinho.
            </p>
            <br></br>
            <p>
              Mais informações: <br></br>
              <a href='https://www.facebook.com/lardeidososdoceaconchego/'>https://www.facebook.com/lardeidososdoceaconchego/</a>

            </p>

          
          </div>

        </div>

        <div className="lar">
          <h2 className="titulo">Lar Arte e Cuidar</h2>
          <div className="imagens">
            <img src="src/assets/images/arte e cuidar 1.png" alt="Imagem LAR 2" className="imagem" />
            <img src="src/assets/images/arte e cuidar 2.png" alt="Imagem LAR 2" className="imagem" />
          </div>
          <div className="descricao">
            
            <p>
              O Lar Arte e Cuidar é uma instituição focada no atendimento humanizado de idosos, unindo cuidados médicos ao estímulo à arte e à convivência. Com uma equipe de saúde e assistência social, o lar oferece atividades recreativas e terapêuticas que promovem o bem-estar físico, emocional e cognitivo. 
            </p>
            <p>
              Em um espaço acolhedor, os idosos participam de oficinas de arte, música e programas sociais, fortalecendo o vínculo com a comunidade. O lar valoriza o respeito à história de vida dos residentes, incentiva sua autonomia e conta com o apoio familiar. O Projeto Tempo de Ouro é parceiro da Unidade Hauer.            </p>
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
              <div className="alguma-duvida" id="contato">Alguma dúvida?</div>
              <div className="entre-em-contato">Entre em Contato com Nosso Whatsapp</div>
              <div className="numero-telefone">
                <a
                  href="https://wa.me/5541997445814?text=Olá, tenho interesse em participar, ser um voluntário!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  <button className="whatsapp-button">
                    (41) 997445814
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

<Footer />
    </div>
  );
};

export default Home;
