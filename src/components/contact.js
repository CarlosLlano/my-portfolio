import React, { Component } from 'react';
import Menu from './menu';

class Contact extends Component {
    componentWillMount()
    {
        document.body.id = "";
    }
    render() {
        return (
            <div>
                <Menu optionSelected='3'/>
                <main id="contact">
                    <h1 class="lg-heading">Contact
                        <span class="text-secondary"> Me</span>
                    </h1>
                    <h2 class="sm-heading">This is how you can reach me...</h2>
                    <div class="boxes">
                        <div>
                            <span class="text-secondary">Email: </span>carlos_eduardo_llano@hotmail.com
                        </div>
                        <div>
                            <span class="text-secondary">Mobile: </span>(+57)3166279150
                        </div>
                        <div>
                            <span class="text-secondary">Location: </span>Medellín, Colombia
                        </div>
                    </div>
                </main>
            <footer id="main-footer">
                Copyright &copy; 2018
            </footer>
            </div>
        );
    }
}

export default Contact;