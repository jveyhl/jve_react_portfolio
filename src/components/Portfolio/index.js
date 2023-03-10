import React, { useState } from "react";
import Project from "../Project";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Portfolio() {
  const [pages] = useState([
    {
      name: "portfolio",
    },
  ]);
  const [currentPage] = useState(pages[0]);
  const [projects] = useState([
    {
      name: "add name",
      description: "add technologies used",
      link: "link to deployed app",
      repo: "link to github rep",
    },
  ]);

  return (
    <section className="p-0">
      <div className="container-fluid p-0">
        <h1 className="text-center margin-top">
          {capitalizeFirstLetter(currentPage.name)}
        </h1>
        <hr className="my-4" />
        <div className="row no-gutters popup-gallery">
          {projects.map((project, idx) => (
            <Project project={project} key={"project" + idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
