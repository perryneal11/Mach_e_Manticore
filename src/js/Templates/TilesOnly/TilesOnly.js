import React from 'react';
import { connect } from 'react-redux'
import AppHeader from '../../containers/Header';
import { SoftButtons } from '../../containers/Buttons';
import StatusBar from '../../containers/StatusBar'
import InAppMenu from '../../InAppMenu';

class TilesOnly extends React.Component {
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
                <div className="tiles-only-template" style={this.getColorScheme()}>
                    <SoftButtons class="tiles-only-container th-bg-color"/>
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

export default connect(mapStateToProps)(TilesOnly);