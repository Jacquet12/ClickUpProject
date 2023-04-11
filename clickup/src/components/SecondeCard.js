import'../styles/secondeCardStyles.css'
import projects_tasks from "../images/projects_tasks.avif"
function SecondeCard() {

  return (
    <div className="container-secondeCard">
      <div className="secondeCard-header">
          <li className="secondeCard-headertexte1">Docs</li>
          <li className="secondeCard-headerTexte2">Whitebords</li>
          <li className="secondeCard-headerTexte3">Dashbords</li>
      </div>

      <div className="container-secondeCard-texte">
        <h1 className="container-secondeCard-texte1-contain">The world's most<br></br></h1>
        <h2 className="container-secondeCard-texte2-contain">powerful (and fun) <br></br></h2>
        <h3 className="container-secondeCard-texte3-contain"> Docs.<br></br></h3>
      </div>

      <div className="container-secondeCard-image">
        <img src={projects_tasks} alt="projects_tasks" />
      </div>
      
      <div className="container-secondeCard-buttom">
        <input type="button" value="Get Start"></input>
      </div>
      
    </div>
  );
}

export default SecondeCard;