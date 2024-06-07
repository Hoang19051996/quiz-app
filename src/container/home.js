import { textAlign } from "@mui/system";
import js from "../assets/JS.png";

import react from "../assets/reactjs.png";
import css from "../assets/Css.png";
import NavBar from "../component/NavBar";
import seo from "../assets/seo.png";
import uxui from "../assets/uxui.png";

import choose from "../assets/Choose-rafiki.png";
import { Footer } from "../component/Footer";
import { Link, useNavigate } from "react-router-dom";
export const Home = () => {

  const navigate = useNavigate();

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
            <p>How many questions can you answer correctly? </p>
          </div>
          <div className="section-img">
            <img src={choose} />
          </div>
          <div className="col-md-2 section01 item01"  onClick={() => navigate("/quiz")}>
            {" "}
            <img src={js} width={"90px"} height={"85px"} />
           <span> Javascript & Typescript </span>
          </div>

          <div className="col-md-2 section01 item02">
            {" "}
            <img src={react} width={"90px"} height={"85px"} /><br></br>
            <span>
              React & Hook
            </span>
          </div>
          <div className="col-md-2 section01 item03">
          <img src={css} width={"90px"} height={"85px"} />

            <br></br>
            <span > HTML & CSS</span>
          </div>
          <div className="col-md-2 section01 item04">
          <img src={seo} width={"90px"} height={"85px"} />

            <br></br>
            <span > SEO Optimize</span>
          </div>
          <div className="col-md-2 section01 item05">
          <img src={uxui} width={"90px"} height={"85px"} />

            <br></br>
            <span >UX/UI Design</span>
          </div>
        </div>
      </div>

     
      <Footer />
    </>
  );
};
