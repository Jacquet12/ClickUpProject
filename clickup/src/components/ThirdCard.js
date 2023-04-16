import'../styles/ThirdCardStyles.css'
import impot from "../images/impot.jpeg"
function ThirdCard() {

    return (
      <div className="container-ThirdCard">

        <div className="container-ThirdCard-master">
          <div className="container-ThirdCard-texteparagrafo-master">
            <div className="container-ThirdCard-texteparagrafo">
              <p className="container-ThirdCard-firstexte">THE PLATFORM</p>
            </div>

            <div className="container-ThirdCard-secondetexte">
              <h1 className="container-ThirdCard-secondetexteh1">
                Import to the<br></br>future of work<br></br>with one click.
              </h1>
            </div>

            <div className="container-ThirdCard-thirdtexte">
              <p className="container-ThirdCard-thirdtextep">
                Instantly import your work from other tools automatically.<br></br> Create a custom import to bring work in from excel or tools<br></br> that aren't supported.
              </p>
            </div>

            <div className="container-ThirdCard-bottom">
              <div className="container-ThirdCard-bottom-firstgroup">
                <input type="button" value="01 IMPORT"></input>
                <input type="button" value="02 DOWNLOAD"></input>
              </div>

              <div className="container-ThirdCard-bottom-secondegroup">
                <input type="button" value="03 CLICKAPPS"></input>
                <input type="button" value="04 INTERGRATIONS"></input>
              </div>

              <div className="container-ThirdCard-bottom-thirdgroup">
                <input type="button" value="05 AUTOMATIONS"></input>
              </div>

          </div>
          </div>
          

          <div className="container-ThirdCard-img">
            <img src={impot} alt="impot"/>
          </div>

        </div>

        <div className="container-ThirdCard-lastbuttom">
          <div className="container-ThirdCard-lastbutom">
            <input type="button" value="Get Start"></input>
          </div>
        </div>

      </div>

      
    );
  }
  
  export default ThirdCard;