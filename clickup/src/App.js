import jpIMG from "./images/logo-clickup_color.svg"

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
          <input type="button" value="Iniciar"></input>
        </div>

      </div>
    </div>
  );
}

export default App;
