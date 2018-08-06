import React, { Component } from 'react';
import { Grid, Cell, ProgressBar, Tooltip } from "react-mdl";

class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div style={{ display: 'flex'}}> 
                        <Tooltip label={this.props.levelName} position="right">
                            {this.props.skill}
                        </Tooltip>
                        <ProgressBar style={{ margin: "auto", width: "75%"}} progress={this.props.level} />
                        
                    </div>
                </Cell>
            </Grid>
        );
    }
}

export default Skills;