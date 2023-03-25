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
      </div>


      
    </div>
  );
}

export default App;
