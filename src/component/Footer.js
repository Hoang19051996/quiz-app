import appstore from "../assets/rb-js.png"
import ggplay from "../assets/image.png"

export const Footer = () => {
  return (
    <>
      <div className="container-fluid footer ">
        <div className="footer-component">


        <div > 
          <h5><b>Learn more</b></h5>
          <ul className="footer-links">
            <li>Contact</li>
            <li>FAQ</li>
            <li>Term & Condition</li>
            <li>Privacy</li>


          </ul>
          </div>
          <div > 
          <h5><b>Feature</b></h5>
          <ul className="footer-links">
            <li>About Us</li>
            <li>App</li>
            <li>New</li>


          </ul>
          </div>
          

          <div > 
          <h5><b>Download our app</b></h5>
          <ul className="footer-links">
    
            <li> <img src={appstore} width={"120px"}></img></li>
            <br></br>
            <li> <img src={ggplay} width={"120px"}></img></li>


          </ul>
          </div>
          <div > 
          <h5><b>Follow us on</b></h5>
          <ul className="footer-links">
          <li>   <i class="fa-brands fa-square-facebook fa-xl"></i></li>
          <br></br>
          <li>     <i class="fa-brands fa-youtube fa-xl" ></i></li>


          </ul>
          </div>
        </div>
      </div>
    </>
  );
};
