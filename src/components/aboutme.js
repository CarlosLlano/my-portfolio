import React, { Component } from "react";
import Menu from "./menu";
import portrait from '../assets/img/portrait.jpg'
import { Grid, Cell } from "react-mdl";
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class AboutMe extends Component {
  componentWillMount() {
    document.body.id = "";
  }
  render() {
    return (
      <div className="about-info">
        <Menu optionSelected="1" />
        <Grid>
            <Cell col={4}>
            <div style={{textAlign: 'center', marginTop: '10vh'}}>
                <img
                    src={portrait}
                    alt="Carlos" 
                    className="bio-image"
                />
            </div>
            <h2 style={{paddingTop: '2em'}}>Carlos Llano</h2>
            <h4>Software Engineer</h4>
            <hr className="hr-description"/>
            <p>Industrial and Software Engineer seeking opportunities to work in areas related to software engineering, DevOps, Big Data and Analytics, Process improvement through technological systems and Statistical process control.</p>
            <hr className="hr-description"/>
            <h5>Mobile</h5>
            <p>(+57) 316 627 9150</p>
            <h5>Email</h5>
            <p>carlos_eduardo_llano@hotmail.com</p>
            </Cell>
            <Cell className="resume-right-col" col={8}>
                <h2>Education</h2>
                <Education 
                    startYear='2006' 
                    endYear='2012' 
                    schoolName='IES Distrito Maritimo' 
                    degree='high school diploma'/>
                <Education 
                    startYear='2012' 
                    endYear='2018' 
                    schoolName='Universidad Icesi' 
                    degree='Bachelor in Software Engineering / Bachelor in Industrial Engineering'/>
                <hr className="hr-description"/>
                <h2>Experience</h2>
                <Experience 
                    startYear='June 2016' 
                    endYear='Aug 2016' 
                    company='Universidad Icesi' 
                    jobName='SQL Developer' 
                    jobDescription="Designing and implementing SQL queries for reports generation in the new information system at Icesi University named banner."
                />
                <Experience 
                    startYear='Jan 2018' 
                    endYear='Jul 2018' 
                    company='IBM Colombia' 
                    jobName='Developer Advocate Intern' 
                    jobDescription="Promoting through workshops the IBM Global Entrepreneur Program (GEP) and the IBM Cloud Services. Helping IBM Clients in the process of migrating their current IT infrastructure to IBM Cloud, participating in architecture design, software developments, testing, and sizing."
                />
                <hr className="hr-description"/>
                <h2>Skills</h2>
                <Skills skill="Java" level="100" levelName="Advanced"/>
                <Skills skill="C#" level="50" levelName="Intermediate"/>
                <Skills skill="Python" level="50" levelName="Intermediate"/>
                <Skills skill="Visual Basic" level="50" levelName="Intermediate"/>
                <Skills skill="K8s" level="100" levelName="Advanced"/>
                <Skills skill="ELK" level="50" levelName="Intermediate"/>
                <Skills skill="Docker" level="100" levelName="Advanced"/>
                <Skills skill="Linux" level="50" levelName="Intermediate"/>
                <Skills skill="IBM Cloud" level="100" levelName="Advanced"/>
            </Cell>
        </Grid>
        
      </div>
    );
  }
}

export default AboutMe;
