import jpIMG from "./images/logo-clickup_color.svg"
import g2crowd from "./images/g2crowd.png"
import capterra from "./images/capterra.png"
import getapp from "./images/getapp.svg"
import bookings from "./images/booking_com.svg"
import ibm from "./images/ibm.svg"
import logitech from "./images/logitech.svg"
import fortinet from "./images/fortinet.svg"
import tibco from "./images/tibco.svg"
import spotify_logo_with_text from "./images/spotify_logo_with_text.svg"
import netflix from "./images/netflix.svg"
import t_mobile_logo from "./images/t-mobile_logo.svg"
import clickup_v3 from "./images/clickup-v3.svg"
import CU_3_0_Teaser from "./images/CU_3.0_Teaser.png"


import './styles.css'
function App() {
  return (
    <div className="container">
      <div className="container-header">
        <div className="container-header-logo">
          <div className="container-header-logo-svg">
            <img src={jpIMG} alt=" " />

            <li><a >Product</a></li>
            <li><a >Solutions</a></li>
            <li><a >Learn</a> </li>
            <li><a >Pricing</a></li>
            <li><a >Enterprise</a></li>
          </div>

          <div className="container-header-logo-svg">
            <li className="texte1">Contact Sales</li>
            <li className="texte2">Sign Up</li>
            <li className="texte3">Login Up</li>
          </div>

        </div>

        <div className="container-texto-formulario">
          <p1 className="container-texte1" > Um aplicativo para <br></br>
            substituir todos eles.<br></br>
          </p1>
          <p2 className="container-texte2">
          Todo o seu trabalho em um só lugar: Tarefas, Documentos,<br></br> Bate-papo, Metas e muito mais.
          </p2> <br></br>
        </div>

        <div container-texto-formulario-input>
          <input type="text" placeholder="Digite o seu e-mail de trabalho"></input>
        </div>

        <div className="container-texto-formulario-botao">
            <div className="container-texto-formulario-botao-card1">
              <input type="button" value="Iniciar"></input>
            </div>

            <div className="container-texto-formulario-botao-card2">
              <p className="container-texto-formulario-botao-texto1" >FREE FOREVER.</p>
              <p className="container-texto-formulario-botao-texte2">NO CREDIT CARD.</p>
            </div>
        </div>
        
        <div className="container-header-app-icone">

          <div className="container-header-app-icone1">
            <img src={g2crowd} alt="g2crowd" />
          </div>

          <div className="container-header-app-icone2">
          <img src={capterra} alt="captera" />
          </div>

          <div className="container-header-app-icone3">
          <img src={getapp} alt="getapp" />
          </div>

        </div>

        <div className="conatainer-texte">
          <h1>JOIN 800,000+ HIGHLY PRODUCTIVE TEAMS</h1>
        </div>

        <div className="container-redes-sociais">
          <div container-redes-sociais-logo2>
            <img src={bookings} alt="bookings" />
          </div>

          <div className="container-redes-sociais-logo3">
            <img src={ibm} alt="ibm" />
          </div>

          <div className="container-redes-sociais-logo4">
            <img src={logitech} alt="logitech" />
          </div>

          <div className="container-redes-sociais-logo5">
            <img src={fortinet} alt="fortinet" />
          </div>

          <div className="container-redes-sociais-logo6">
            <img src={tibco} alt="tibco" />
          </div>

          <div className="container-redes-sociais-logo7">
            <img src={spotify_logo_with_text} alt="spotify_logo_with_text" />
          </div>

          <div className="container-redes-sociais-logo8">
            <img src={t_mobile_logo} alt="t_mobile_logo" />
          </div>

          <div className="container-redes-sociais-logo9">
            <img src={netflix} alt="netflix" />
          </div>
        </div>
      

        <div className="container-clickup-3_0_body">
          <div className="container-clickup-3_0">
            <div className="container-clickup-3_0_icone">
              <img src={clickup_v3} alt="clickup_v3" />
            </div>
            <div className="container-clickup-3_0_texte1">
              <h1>Productivity, reimagined.</h1>
            </div>

            <div className="container-clickup-3_0_texte2">
              <p>The next evolution of team productivity and collaboration is here. Unlock the<br></br>next generation of productivity with the infinite possibilities of ClickUp 3.0.</p>
            </div>

          </div>

          <div className="container-clickup-3_0_icone2">
            <img src={CU_3_0_Teaser } alt="U_3_0_Teaser" />
          </div>

          <div className="container-clickup-3_0_texto3">
            <div container-clickup-3_0_texto_3_1>
              <p>Discover What's comming</p>
            </div>

            <div className="container-clickup-3_0_texto_3_icone" ></div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
