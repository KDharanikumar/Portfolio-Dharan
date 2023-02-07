import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import Cv from "../Images/Resume.pdf";

function Home() {
  return (
    <section>
      <div className="container-fluid Home-Page" id="home">
        <div className="banner">
          <div className="row">
            <div className="mydetails">
              <div>
                <p>Hello!</p>
                <div className="wrapper">
                  <p>I Am Dharanikumar K</p>
                  <p style={{ color: "#ff014f" }}>Full Stack Developer</p>
                </div>
                <div className="specialist">
                  <text>DESIGNER</text>
                  <span>|</span>
                  <text>DEVOLOPER</text>
                </div>
                <ul className="social-icon">
                  <a href="https://api.whatsapp.com/send?phone=9952638437" target="blank">
                    <li>
                      <BsWhatsapp />
                    </li>
                  </a>
                  <a href="https://twitter.com/DharanikumarK" target="blank">
                    <li>
                      <FaTwitter />
                    </li>
                  </a>
                  <a href="https://www.linkedin.com/in/dharanikumarkfsd/" target="blank">
                    <li>
                      <FaLinkedinIn />
                    </li>
                  </a>
                  <a href="https://github.com/KDharanikumar" target="blank">
                    <li>
                      <FaGithub />
                    </li>
                  </a>
                  <a href="https://www.facebook.com/DharanikumarKalaiselvan/" target="blank">
                    <li>
                      <FaFacebookF />
                    </li>
                  </a>
                  <a href="https://www.instagram.com/dharanikumarkalaiselvan/" target="blank">
                    <li>
                      <FaInstagram />
                    </li>
                  </a>
                </ul>
                <div className="d-flex justify-content-center align-items-center">
                  <a href={Cv} download="Resume" target="blank">
                    <button>RESUME</button>
                  </a>

                  <a href="mailto:dharanfsd@gmail.com">
                    <button>CONATCT</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
