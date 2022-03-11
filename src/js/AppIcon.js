import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Templates/Shared/Image'
import {ReactComponent as IconMenu} from '../img/icons/icon-menu.svg';

export default class AppIcon extends React.Component {
    render() {
        var fillColor = null;
        if (this.props.theme) {
            fillColor = "#FFFFFF"
        } else {
            fillColor = "#000000"
        }
        //While viewing menu, pressing menu button takes user back to app screen
        var path = this.props.isShowingMenu ? this.props.backLink : "/inappmenu" 
        var icon = this.props.icon ?
            (<Image class="app-icon" image={this.props.icon} isTemplate={this.props.isTemplate} fillColor={fillColor}/>)
            : (<span className="app-icon"></span>)
        return (    
                    <div className="app-icon">
                        {icon}
                    </div>
        )
    }
}
