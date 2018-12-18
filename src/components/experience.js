import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";

class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                    <p>{this.props.location}</p>
                </Cell>
                <Cell col={8}>
                    <a href={this.props.url}>
                        <h4 style={{marginTop: '0px', textDecorationLine: 'underline'}}>
                            {this.props.company}
                        </h4>
                    </a>
                    <h6>{this.props.jobName}</h6>
                    <p>{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        );
    }
}

export default Experience;