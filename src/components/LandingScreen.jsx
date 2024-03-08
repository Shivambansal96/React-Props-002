import "./LandingScreen.css";
import { cardData } from "./Data.js";

function LandingScreen() {
  return (
    <div id="landing-screen">
      {cardData.map((item) => {
        return (                
        //   <div id="landing-screen-inner">
            <div id="Card" style={{ backgroundImage: `url(${item.imageSrc})` }}>
              <div id="card-inner">
                <div id="para-one">
                  <div id="para-one-left">
                    <img src={item.link} alt={item.alt} />
                  </div>
                  <div id="para-one-right">
                    <div id="para-one-right-top">
                      <p className="pOne">{item.title}</p>
                      {/* <br /> */}
                      <p className="pTwo">{item.timePeriod}</p>
                    </div>
                    <div id="para-one-right-below">
                      <p className="pOne">{item.time}</p>
                      <p>{item.genre}</p>
                    </div>
                  </div>
                </div>

                <div id="para-two">
                  <p>{item.description}</p>
                </div>

                <div id="para-three">
                  <a href="">
                    <i class="fa-solid fa-share-nodes"></i>
                  </a>
                  <a href="">
                    <i class="fa-solid fa-heart"></i>
                  </a>
                  <a href="">
                    <i class="fa-solid fa-message"></i>
                  </a>
                </div>
              </div>
            </div>
        // </div>
        );
      })}
    </div>
  );
}

export default LandingScreen;
