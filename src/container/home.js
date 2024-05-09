import { textAlign } from "@mui/system";
import NavBar from "../component/NavBar";

export const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row flex-row" >
          <div className="col-md-3 section01" > <a href="/quiz"> A </a></div>
          <div className="col-md-3 section01"> B</div>
          <div className="col-md-3 section01"> C </div>
        </div>
      </div>


      <div className="container">
        <div className="row flex-row" >
          <div className="col-md-3 section01"> A</div>
          <div className="col-md-3 section01"> B</div>
          <div className="col-md-3 section01"> C </div>
        </div>
      </div>
    </>
  );
};
