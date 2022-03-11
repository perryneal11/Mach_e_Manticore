import React from 'react';
import StaticIcon from './StaticIcon'
import Image from './Image'
import { MoreSoftButtons } from '../../containers/Buttons';
import Name from '../../containers/Name';


export default class LargeGraphicBody extends React.Component {
    fillColor() {
        var fillColor = null;
        if (this.props.theme) {
            fillColor = "#FFFFFF"
        } else {
            fillColor = "#000000"
        }
        return fillColor;        
    }

    largeGraphic() {
        if (this.props.graphic) {
            if(this.props.graphic.imageType === "STATIC") {
                return <StaticIcon class="large-graphic" image={this.props.graphic.value} />
            } else {
                return <Image class="large-graphic" 
                            image={this.props.graphic.value} 
                            isTemplate={this.props.graphic.isTemplate}
                            fillColor={this.fillColor()}/>
            }
        } else {
            return(null)
        }
        
    }

    render() {
        return(
            <div class="large-graphic-with-softbuttons-body">
                <div class="large-graphic-with-softbuttons-metadata">
                    <div class="text">
                        <Name />
                        <p class="tagline">{this.props.mainField1}</p>
                    </div>
                    <MoreSoftButtons class="more-soft-button"/>
                    <div class="setting" data-radium="true">
                        <div class="soft-buttons" data-radium="true">
                            <div class="soft-button-tile-small th-f-color t-small t-light th-bg-color th-soft-buttons soft-button" data-radium="true">
                                <img src="../../../img/icons/Settings.svg" />
                            </div>
                        </div>
                    </div>
                </div> 
                <div className={this.props.class}>           
                    {this.largeGraphic()}
                </div>
            </div>
        )
    }
}