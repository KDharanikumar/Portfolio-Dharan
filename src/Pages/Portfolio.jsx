import { BsFillEyeFill } from "react-icons/bs";
import Portfol from "../Data/Portfolio.json";
import { motion } from "framer-motion";
import { useState } from "react";

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
            <button onClick={() => filterItem("Websites")}>WEBSITES</button>
            <button onClick={() => filterItem("Design")}>DESIGN</button>
          </div>
          <motion.div layout className="col d-flex flex-wrap justify-content-evenly align-items-center gap-3">
            {items.map((element) => {
              const { category, picture, url } = element;
              return (
                <motion.div className="mywork">
                  <img src={picture} alt={category} />
                  <a href={url} target="blank">
                    <BsFillEyeFill />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
