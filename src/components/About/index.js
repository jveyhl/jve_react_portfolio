import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function About() {
  const [pages] = useState([
    {
      name: "about me",
    },
  ]);
  const [currentPage] = useState(pages[0]);

  return (
    <div className="masthead text-center text-white d-flex">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1>{capitalizeFirstLetter(currentPage.name)}</h1>
            <hr />
            <p className="text-faded mb-5">
              I graduated from the University of Toronto with an M.Sc. in
              Molecular Genetics and am currently a Research Associate at a
              Contract Research Ogranization (CRO) in Montreal. I am in the
              process of earning a Certificate in Full Stack Web Development
              from the University of Toronto.
            </p>

            <p className="text-faded mb-5">
              Working in the fast-paced field of genetics has allowed be to
              develop excellent organizational skills and the ability to solve
              complex problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
