import { FaBootstrap, FaCss3Alt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";

const Skills = () => {
	return (
		<section>
			<div className="container Myskills-Page py-5" id="skills">
				<div className="row">
					<h1>
						My <span>Skills</span>
					</h1>
					<div className="col skills">
						<ul>
							<li>
								<icon style={{ color: "#F35625" }}>
									<FaHtml5 />
								</icon>
								<p>HTML</p>
							</li>
							<li>
								<icon style={{ color: "#254BDD" }}>
									<FaCss3Alt />
								</icon>
								<p>CSS</p>
							</li>
							<li>
								<icon style={{ color: "#8411F6" }}>
									<FaBootstrap />
								</icon>
								<p>Bootstrap</p>
							</li>
							<li>
								<icon style={{ color: "#38BDF8" }}>
									<SiTailwindcss />
								</icon>
								<p>Tailwind CSS</p>
							</li>
							<li>
								<icon style={{ color: "#E9D44D" }}>
									<SiJavascript />
								</icon>
								<p>JavaScript</p>
							</li>
							<li>
								<icon style={{ color: "#00D1F7" }}>
									<FaReact />
								</icon>
								<p>React JS</p>
							</li>
							<li>
								<icon style={{ color: "#8CBF3D" }}>
									<FaNode />
								</icon>
								<p>Node JS</p>
							</li>
							<li>
								<icon style={{ color: "#9A88D3" }}>
									<SiExpress />
								</icon>
								<p>Express JS</p>
							</li>
							<li>
								<icon style={{ color: "#109A4E" }}>
									<SiMongodb />
								</icon>
								<p>MongoDB</p>
							</li>
							<li>
								<icon style={{ color: "#42759C" }}>
									<SiMysql />
								</icon>
								<p>My SQL</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
