import { textAlign } from "@mui/system";
import js from "../assets/JS.png";

import react from "../assets/reactjs.png";
import css from "../assets/Css.png";
import NavBar from "../component/NavBar";
import biology from "../assets/biology-rmbg.png";
import math from "../assets/math (2).png";

import Chemistry from "../assets/chemistry (2).png";
import { Footer } from "../component/Footer";
export const Home = () => {
  return (
    <>
    <div className="navBar-background container-fluid">
    <NavBar />

    </div>

      <div className="container">
        <div className="row flex-row">
          <div className="text-introduce">
            <strong>
              <span>
                PERSONALIZE YOUR <span>QUIZ</span> EXPERIENCE{" "}
              </span>
            </strong>
            <p>You can come back and change this result again</p>
          </div>
          <div className="col-md-3 section01">
            {" "}
            <a href="/quiz"> Javascript & Typescript </a>
            <img src={js} width={"20%"} className="position-bottom" />
          </div>

          <div className="col-md-3 section01">
            {" "}
            <a href="/quiz">
              {" "}
              React <br></br>& Hook
            </a>
            <img src={react} width={"20%"} className="position-bottom" />
          </div>
          <div className="col-md-3 section01">
            {" "}
            <a href="/quiz"> Cascading Style Sheets</a>
            <img src={css} width={"20%"} className="position-bottom" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row flex-row">
        <div className="col-md-3 section01">
            {" "}
            <a href="/quiz"> Biology</a>
            <img src={biology} width={"25%"} className="position-bottom" />
          </div>
          <div className="col-md-3 section01">
            {" "}
            <a href="/quiz"> Math</a>
            <img src={math} width={"25%"} className="position-bottom" />
          </div>
          <div className="col-md-3 section01">
            {" "}
            <a href="/quiz"> Chemistry</a>
            <img src={Chemistry} width={"25%"} className="position-bottom" />
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
};
