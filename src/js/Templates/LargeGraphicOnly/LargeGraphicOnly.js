import React from 'react';
import { connect } from 'react-redux'

import AppHeader from '../../containers/Header';
import { LargeGraphic } from '../../containers/Metadata';
import StatusBar from '../../containers/StatusBar'
import InAppMenu from '../../InAppMenu';

class LargeGraphicOnly extends React.Component {
    getColorScheme() {
        var activeApp = this.props.activeApp
        var colorScheme = null;
        if (activeApp) {
            if (this.props.theme === true) { //Dark Theme
                if (this.props.ui[activeApp].nightColorScheme && this.props.ui[activeApp].nightColorScheme.backgroundColor) {
                    colorScheme = this.props.ui[activeApp].nightColorScheme.backgroundColor
                }
            } else { //Light Theme
                if (this.props.ui[activeApp].dayColorScheme && this.props.ui[activeApp].dayColorScheme.backgroundColor) {
                    colorScheme = this.props.ui[activeApp].dayColorScheme.backgroundColor
                }
            }
        }

        if (colorScheme) {
            var redInt = colorScheme.red;
            var blueInt = colorScheme.blue;
            var greenInt = colorScheme.green;
            var cssColorScheme = {
                backgroundColor: `rgb(${redInt}, ${greenInt}, ${blueInt})`
            }
            return cssColorScheme;
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                <StatusBar backLink="/" menuName="Apps"/>
                <AppHeader backLink="/" menuName="Apps"/>
                <div className="large-graphic-only-template" style={this.getColorScheme()}>
                    <InAppMenu/>
                </div>
            </div>  
        )
    }
}

const mapStateToProps = (state) => { 
    return { 
        activeApp: state.activeApp,
        theme: state.theme,
        ui: state.ui     
    };
};

export default connect(mapStateToProps)(LargeGraphicOnly);