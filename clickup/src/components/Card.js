
import '../styles/styles1.css';
import projects_tasks from "../images/projects_tasks.avif"

function Card() {
  return (
    <div className="container-secondePage">
      <div className="header">
        <li className="texte1">Project & Tasks</li>
        <li className="texte2">Chat</li>
        <li className="texte3">Goals</li>
        <li className="texte3">Views</li>
      </div>

      <div className="block-container-texte">
        <div className="container-texte">
          <h1 className="container-texte1">
            Simplify work and get<br></br>more done.
          </h1>
        </div>

        <div className="container-secondePage-paragraphe">
          <p>Plan, track, and manage any type of work with project<br></br>management that flexes to your team's needs.</p>
        </div>

        <div className="container-secondePage-replace">
          <p className="container-secondePage-paraphe-texte">
            REPLACES: Asana | Monday | Jira
          </p>
        </div>

        <div className="container-secondePage-button">
          <input type="button" value="Get Start"></input>
        </div>
      </div>
      
      <div className="container-secondePage-imagem">
        <img src={projects_tasks} alt="projects_tasks" />
      </div>

    </div>
  );
}

export default Card;