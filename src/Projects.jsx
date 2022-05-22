import React from "react";
import "./Projects.css";
import { Button } from "react-bootstrap";

export const Projects = () => (
  <div>
    <h1>Projects:</h1>
    <p>Projects section coming soon...</p>
    <p>For now, check out my projects on GitHub...</p>
    {/*TODO: Add a square github icon for projects..*/}
    {/* <a href="#" class="fa fa-github"></a> */}
    <Button
      variant="dark"
      href="https://github.com/datoche-juarez/"
      target="_blank"
      className="project-button"
    >
      Github
    </Button>
  </div>
);
