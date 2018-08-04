import React, { Component } from "react";

class Menu extends Component {

  constructor(props)
  {
    super(props);
    this.state = { showMenu: false,
                   options: ['HOME', 'ABOUT ME', 'MY WORK', 'HOW TO REACH ME'] };
  }

  componentDidMount() {
    this.setCurrent(this.props.optionSelected);
    this.nv.addEventListener("click", this.toggleMenu);
  }

  componentWillUnmount() {
    this.nv.removeEventListener("click", this.toggleMenu);
  }
  toggleMenu = (event) => {
    // select DOM items (UI Structure - html, body, h1, etc)
    const menuBtn = document.querySelector(".menu-btn");
    const menu = document.querySelector(".menu");
    const menuNav = document.querySelector(".menu-nav");
    const menuBranding = document.querySelector(".menu-branding");
    const navItems = document.querySelectorAll(".nav-item");
    // set the initial state of the menu
    let showMenu = this.state.showMenu;
    if (!showMenu) {
      menuBtn.classList.add("close");
      menu.classList.add("show");
      menuNav.classList.add("show");
      menuBranding.classList.add("show");
      navItems.forEach(item => item.classList.add("show"));
      this.setState({ showMenu: true })
    } else {
      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      menuNav.classList.remove("show");
      menuBranding.classList.remove("show");
      navItems.forEach(item => item.classList.remove("show"));
      this.setState({ showMenu: false })
    }
  }

  setCurrent(optionNumber)
  {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item) => item.classList.remove('current'));
    navItems[optionNumber].classList.add('current');
  }

  render() {
    return (
      <div>
        <header>
          <div className="menu-btn" ref={elem => this.nv = elem}>
            <div className="btn-line" />
            <div className="btn-line" />
            <div className="btn-line" />
          </div>
          <nav className="menu">
            <div className="menu-branding">
              <div className="portrait" />
            </div>
            <ul className="menu-nav">
              <li className="nav-item current">
                <a href="index.html" className="nav-link">
                  {this.state.options[0]}
                </a>
              </li>
              <li className="nav-item">
                <a href="aboutme.html" className="nav-link">
                {this.state.options[1]}
                </a>
              </li>
              <li className="nav-item">
                <a href="work.html" className="nav-link">
                {this.state.options[2]}
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">
                {this.state.options[3]}
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Menu;
