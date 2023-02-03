import Dharan from "../Images/Dharan.jpg";
import Cv from "../Images/Resume.pdf";

const About = () => {
  return (
    <section>
      <div className="container About-Page py-5" id="about">
        <div className="row">
          <h1>
            About <span>Me</span>
          </h1>
          <div className="col-6 m-auto d-flex justify-content-center align-items-center">
            <div className="my-pic">
              <img src={Dharan} alt="img" />
            </div>
          </div>
          <div className="col-md-6 my-details">
            <h3 className="mb-4">
              Hai I Am, <span>Dharanikumar K</span>
            </h3>
            <p className="mb-4 w-75">
              I'm a FullStack Developer. My expertise is to create Web Application and Websites Design.
            </p>
            <ul className="mb-5 p-0">
              <li>
                <span>Name</span>
                Dharanikumar K
              </li>
              <li>
                <span>Age</span>
                30
              </li>
              <li>
                <span>Address</span>
                Kancheepuram, TN
              </li>

              <li>
                <span>Country</span>
                India
              </li>
              <li>
                <span>Phone</span>
                +91-9952638437
              </li>
              <li>
                <span>E-Mail</span>
                dharanfsd@gmail.com
              </li>
            </ul>
            <a href={Cv} download="Resume">
              <button>DOWNLOAD CV</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
