// import Logo from './assets/logo.jpeg'
import './style.css'
import {FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa';
import serv1 from './assets/serv1.jpg';

function App() {
  return (
    <div>
    <section className="App">
      <div className="layer"></div>
      <div className="center">
        <header>
          <div className="icons-social">
            <a href=""><FaFacebook/></a>
            <a href=""><FaInstagram/></a>
            <a href=""><FaWhatsapp/></a>
          </div>
          <div className="clear"></div>
          <div className="logo">LS Manutenções</div>
          <nav className="desktop">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="#services">Serviços</a></li>
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
            Pegar texto com a Carol
            <br/>
            <h6>(19) 99503-2828</h6>
          </div>
          <div className="btn-header">
            <a href="" target="_blank"className="btn-one">Fale por Whatsapp</a>
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
              <h6>Nossos Serviços</h6>
            </div>
          </div>
          <div className="col-offest hover-item">
            <div className="service-item">
              <div className="icon-service">
                <span>
                  <img src={serv1} alt=""/>
                </span>
              </div>
              <h4>Serviços Gerais</h4>
              <p>LS Manutenções</p>
            </div>
          </div>
          <div className="col-offest hover-item">
            <div className="service-item">
              <div className="icon-service">
                <span>
                <img src={serv1} alt=""/>
                </span>
              </div>
              <h4>Serviços Gerais</h4>
              <p>LS Manutenções</p>
            </div>
          </div>
          <div className="col-offest hover-item">
            <div className="service-item">
              <div className="icon-service">
                <span>
                <img src={serv1} alt=""/>
                </span>
              </div>
              <h4>Serviços Gerais</h4>
              <p>LS Manutenções</p>
            </div>
          </div>
          <div className="col-offest hover-item">
            <div className="service-item">
              <div className="icon-service">
                <span>
                <img src={serv1} alt=""/>
                </span>
              </div>
              <h4>Serviços Gerais</h4>
              <p>LS Manutenções</p>
            </div>
          </div>
          <div className="col-offest hover-item">
            <div className="service-item">
              <div className="icon-service">
                <span>
                <img src={serv1} alt=""/>
                </span>
              </div>
              <h4>Serviços Gerais</h4>
              <p>LS Manutenções</p>
            </div>
          </div>
          <div className="col-offest hover-item">
            <div className="service-item">
              <div className="icon-service">
                <span>
                <img src={serv1} alt=""/>
                </span>
              </div>
              <h4>Serviços Gerais</h4>
              <p>LS Manutenções</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default App;
