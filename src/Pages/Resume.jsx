import { FaCalendarAlt, FaGraduationCap, FaUniversity, FaUserGraduate, FaUserTie } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import Education from "../Data/Education.json";
import Experience from "../Data/Experience.json";

const Resume = () => {
	return (
		<section>
			<div className="container Resume-Page py-5" id="resume">
				<div className="row">
					<h1>
						My <span>Resume</span>
					</h1>
					<div className="col-md-6">
						<div className="resume-topic">
							<FaUserGraduate className="icon" />
							<span>Education</span>
						</div>

						<div className="education-details">
							{Education.map((collection) => (
								<div class="card">
									<ul class="card-body mb-0">
										<li className="degree">
											<icon>
												<FaGraduationCap />
											</icon>
											<p>{collection.degree}</p>
										</li>
										<li className="year">
											<icon>
												<FaCalendarAlt />
											</icon>
											<p>{collection.year}</p>
										</li>
										<li className="institute">
											<icon>
												<FaUniversity />
											</icon>
											<p>{collection.institute}</p>
										</li>
										<li className="location">
											<icon>
												<TiLocation />
											</icon>
											<p>{collection.place}</p>
										</li>
									</ul>
								</div>
							))}
						</div>
					</div>
					<div className="col-md-6">
						<div className="resume-topic">
							<FaUserTie className="icon" />
							<span>Experience</span>
						</div>

						<div className="experience-details">
							{Experience.map((collection) => (
								<div class="card">
									<ul class="card-body mb-0">
										<li className="role">
											<icon>
												<FaGraduationCap />
											</icon>
											<p>{collection.role}</p>
										</li>
										<li className="year">
											<icon>
												<FaCalendarAlt />
											</icon>
											<p>{collection.year}</p>
										</li>
										<li className="institute">
											<icon>
												<FaUniversity />
											</icon>
											<p>{collection.company}</p>
										</li>
										<li className="location">
											<icon>
												<TiLocation />
											</icon>
											<p>{collection.place}</p>
										</li>
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Resume;
