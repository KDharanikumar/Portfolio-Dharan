import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMenu = () => setClick(false);

	return (
		<div className="header">
			<nav className="navbar">
				<div>
					<Link to="home" spy={true} smooth={true} offset={-200} duration={500} onClick={closeMenu} className="logo">
						<>DHARAN</>
					</Link>
				</div>

				<div className="hamburger" onClick={handleClick}>
					{click ? (
						<FaTimes size={30} style={{ color: "#ffffff" }} />
					) : (
						<FaBars size={30} style={{ color: "#ffffff" }} />
					)}
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="home" spy={true} smooth={true} offset={-100} duration={100} onClick={closeMenu}>
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="about" spy={true} smooth={true} offset={-100} duration={100} onClick={closeMenu}>
							About
						</Link>
					</li>
					<li className="nav-item">
						<Link to="skills" spy={true} smooth={true} offset={-100} duration={100} onClick={closeMenu}>
							Skills
						</Link>
					</li>
					<li className="nav-item">
						<Link to="resume" spy={true} smooth={true} offset={-100} duration={100} onClick={closeMenu}>
							Resume
						</Link>
					</li>
					<li className="nav-item">
						<Link to="portfolio" spy={true} smooth={true} offset={-100} duration={100} onClick={closeMenu}>
							Portfolio
						</Link>
					</li>
					<li className="nav-item">
						<Link to="contact" spy={true} smooth={true} offset={-100} duration={100} onClick={closeMenu}>
							Conatct
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
