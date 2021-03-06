import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as DarkDots} from '../img/icons/darkdots.svg'


export default class AppMenuLink extends React.Component {
    render() {
        return (
            <div>
                <Link
                    
                    to={this.props.backLink}
                    href=""
                    className="t-small t-medium th-f-color t-ls1"
                    onClick={() => this.props.onSelection(this.props.appID, this.props.backLink, this.props.parentID)}>
                    {this.props.menuName}
                    <DarkDots className = 'dark_dots'/>
                    
                </Link>
            </div>
        )
    }
}