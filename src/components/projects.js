import React, { Component } from "react";
import Menu from "./menu";
import projects from "../assets/projects/data.json";
import ProjectItem from './projectitem';


class Projects extends Component {
  componentWillMount() {
    document.body.id = "";
  }
  render() {
    let projectsItems;
    if (projects) {
        projectsItems = projects.map(project => {
            return (
            <ProjectItem 
              key={project.nombre} 
              name={project.nombre} 
              img={project.img} 
              link={project.link} 
              category={project.category}/>
            );
        });
    }
    return (
      <div>
        <Menu optionSelected="2" />
        <main id="work">
          <h1 className="lg-heading">
            My
            <span className="text-secondary"> Work</span>
          </h1>
          <h2 className="sm-heading">Check out some of my projects...</h2>
          <a href="https://carlosllano.github.io/">
            <h5 className="sm-heading">View projects list</h5>
          </a>
          <div className="projects">
                { projectsItems }
          </div>
        </main>
        <footer id="main-footer">Copyright &copy; 2018</footer>
      </div>
    );
  }
}

export default Projects;
