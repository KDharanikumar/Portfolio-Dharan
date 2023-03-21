import { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import { Link } from "react-scroll";
import Portfol from "../Data/Portfolio.json";

const Portfolio = () => {
	const [items, setItems] = useState(Portfol);

	const filterItem = (catgItem) => {
		const updateItems = Portfol.filter((currentElement) => {
			return currentElement.category === catgItem;
		});
		setItems(updateItems);
	};

	return (
		<section>
			<div className="container Portfolio-Page py-5" id="portfolio">
				<div className="row">
					<h1>
						My <span>Portfolio</span>
					</h1>
					<div className="d-flex justify-content-center align-items-center mb-5">
						<button onClick={() => setItems(Portfol)}>ALL</button>
						{/* <button onClick={() => filterItem("Portfolio")}>PORTFOLIO</button> */}
						<button onClick={() => filterItem("Websites")}>WEBSITES</button>
						<button onClick={() => filterItem("E-Com")}>E-COM</button>
					</div>
					<div className="col d-flex flex-wrap justify-content-evenly align-items-center gap-3">
						{items.map((element) => {
							const { category, picture, hosturl, giturl, program, title } = element;
							return (
								<div>
									<p className="text-center fs-6 fw-bold mb-2">{title}</p>
									<div className="mywork mb-3">
										<img src={picture} alt={category} />
									</div>
									<div className="source-link d-flex justify-content-center">
										<a href={hosturl} target="blank">
											<BsFillEyeFill />
										</a>
										<a href={giturl} target="blank">
											<FaGithub />
										</a>
									</div>
									<p className="program">{program}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
