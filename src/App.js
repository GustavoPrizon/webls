// import Logo from './assets/logo.jpeg'
import './style.css'
import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa';
import serv1 from './assets/serv1.jpg';
import serv2 from './assets/serv2.jpg';
import serv3 from './assets/serv3.jpg';
import serv4 from './assets/serv4.jpg';
import serv5 from './assets/serv5.jpg';
import serv6 from './assets/serv6.jpg';

function App() {
  return (
    <div>
    <section className="App">
      <div className="layer"></div>
      <div className="center">
        <header>
          <div className="icons-social">
            <a href="https://www.facebook.com/LOPESESILVAMANUTENCOES"><FaFacebook/></a>
            <a href="https://www.instagram.com/lopesesilvamanutencoes/"><FaInstagram/></a>
            <a href="https://api.whatsapp.com/send?phone=5519995032828"><FaWhatsapp/></a>
          </div>
          <div className="clear"></div>
          <div className="logo">LS Manutenções</div>
          <nav className="desktop">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#about">Quem Somos</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
          <div className="clear"></div>
        </header>
        <div>
          <div className="into-header">
            <h1>Ligue agora</h1>
          </div>
          <div className="text-header">
            <p style={{color: 'red', fontWeight: 'bold'}}>Pegar texto com a Carol</p>
            <br/>
            <h6>(19) 99503-2828</h6>
          </div>
          <div className="btn-header">
            <a href="https://api.whatsapp.com/send?phone=5519995032828" target="_blank"className="btn-one">Fale por Whatsapp</a>
          </div>
        </div>
      </div>
    </section>
    <section id="services" className="services">
      <div className="container">
        <div className="row">
          <div className="col-offset col-md-8 offset-md-2">
            <div className="section-title text-center">
              <h2>Pegar texto com a Carol</h2>
              <h3>Nossos Serviços</h3>
            </div>
          </div>
          <div className="col-offest hover-item">
            <div className="service-item">
              <div className="icon-service">
                <span>
                  <img src={serv1} alt=""/>
                </span>
              </div>
              <h4>Serviços em geral</h4>
              <p>Marido de aluguel</p>
            </div>
          </div>
          <div className="col-offest hover-item">
            <div className="service-item">
              <div className="icon-service">
                <span>
                <img src={serv2} alt=""/>
                </span>
              </div>
              <h4>Hidraúlica</h4>
              <p>Reparo de vazamentos</p>
            </div>
          </div>
          <div className="col-offest hover-item">
            <div className="service-item">
              <div className="icon-service">
                <span>
                <img src={serv3} alt=""/>
                </span>
              </div>
              <h4>Elétrica</h4>
              <p>Eletricista especializado</p>
            </div>
          </div>
          <div className="col-offest hover-item">
            <div className="service-item">
              <div className="icon-service">
                <span>
                <img src={serv4} alt=""/>
                </span>
              </div>
              <h4>Pintura</h4>
              <p>Serviços de pintura</p>
            </div>
          </div>
          <div className="col-offest hover-item">
            <div className="service-item">
              <div className="icon-service">
                <span>
                <img src={serv5} alt=""/>
                </span>
              </div>
              <h4>Instalações</h4>
              <p>Ar condicionado e manunteção</p>
            </div>
          </div>
          <div className="col-offest hover-item">
            <div className="service-item">
              <div className="icon-service">
                <span>
                <img src={serv6} alt=""/>
                </span>
              </div>
              <h4>Reparos em geral</h4>
              <p style={{color: 'red'}}>coloco o que aqui?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <sectio id="about" className="about">
      <div className="about-one">
        <div className="overlay"></div>
        <div className="container">
          <div className="row-about">
            <div className="col-offset img-about-one">
              <div className="about-img">
                <div className="overlay-about">
                  <div className="text-overlay">
                    <div className="pos-text">
                      1 Ano
                      <span>Serviços de confiança</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-offset">
              <div className="info-about">
                <div className="section-title-left">
                  <h2 style={{fontWeight: 'bold'}}>Reparos...</h2>
                  <h3 style={{color: '#fff'}}>Quem Somos</h3>
                </div>
                <p className="grey-color">
                  Texto sobre vocês
                </p>
                <div className="btn-about">
                  <a href="https://api.whatsapp.com/send?phone=5519995032828" target="_blank" className="btn-two">(19) 99503-2828</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </sectio>
    </div>
  );
}

export default App;
