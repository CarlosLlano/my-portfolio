import React, { Component } from "react";

class ProjectItem extends Component {
  render() {
    return (
      <div className="item">
        <a href={this.props.link}>
          <img src={this.props.img} alt={this.props.name} />
        </a>
        <a href={this.props.link} className="btn-dark">
          <i className="fas fa-eye" /> {this.props.name}
        </a>
        <a href={this.props.link} className="btn-dark" style={{textAlign: "center"}}>
          <i className="fas fa-code" /> {this.props.category}
        </a>
      </div>
    );
  }
}

export default ProjectItem;
