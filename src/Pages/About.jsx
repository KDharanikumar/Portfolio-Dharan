import Dharan from "../Images/Dharan.png";
// import Cv from "../Images/Resume.pdf";

const About = () => {
	return (
		<section>
			<div className="container About-Page py-4" id="about">
				<div className="row">
					<h1>
						About <span>Me</span>
					</h1>
					<div className="col-md-6 p-2 m-auto d-flex justify-content-center align-items-center">
						<div className="my-pic">
							<img src={Dharan} alt="img" />
						</div>
					</div>
					<div className="col-md-6 p-3 my-details">
						<h3 className="mb-4">
							Hai I Am, <span>Dharanikumar K</span>
						</h3>
						<p className="mb-4">
							{/* I'm a FullStack Developer. My expertise is to create Web Application and Websites Design. */}
							Hello, I am DHARANIKUMAR K, MBA & Engineering graduate student. Aspiring Full Stack Developer with a focus
							on the MERN stack who is passionate and dedicated. I want to use my technical knowledge and skills to
							build and develop high-quality, user-friendly platforms. I'm looking for a challenging position at a
							fast-paced company where I can expand my knowledge and contribute to exciting projects.
						</p>
						<ul className="mb-4 p-0">
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
						{/* <a href={Cv} download="Resume">
							<button>DOWNLOAD CV</button>
						</a> */}
						<a
							href="https://drive.google.com/file/d/1qTUc9y3hgdzlvJV3L5HyA6oTt7mm3wD3/view?usp=share_link"
							target="_blank"
							rel="noreferrer"
						>
							{/* {Cv} download="Resume" */}
							<button>VIEW RESUME</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
