import React from 'react';
import StaticIcon from '../Shared/StaticIcon'
import Image from '../Shared/Image'
import { MoreSoftButtons } from '../../containers/Buttons';
import Name from '../../containers/Name';

export default class DoubleGraphicBody extends React.Component {
    fillColor() {
        var fillColor = null;
        if (this.props.theme) {
            fillColor = "#FFFFFF"
        } else {
            fillColor = "#000000"
        }
        return fillColor;        
    }

    primaryGraphic() {
        if(this.props.graphic) {
            if(this.props.graphic.imageType === "STATIC") {
                return <StaticIcon class="double-graphic" image={this.props.graphic.value} />
            } else {
                return <Image class="double-graphic" 
                    image={this.props.graphic.value} 
                    isTemplate={this.props.graphic.isTemplate}
                    fillColor={this.fillColor()}/>
            }
        } else {
            return null
        }
    }

    secondaryGraphic() {
        if(this.props.secondaryGraphic) {
            if(this.props.secondaryGraphic.imageType === "STATIC") {
                return <StaticIcon class="double-graphic" image={this.props.secondaryGraphic.value} />
            } else {
                return <Image class="double-graphic" 
                    image={this.props.secondaryGraphic.value} 
                    isTemplate={this.props.secondaryGraphic.isTemplate}
                    fillColor={this.fillColor()}/>
            }
        } else {
            return null
        }
    }

    render() {
        return (
            <div class="double-graphic-with-softbuttons-body">
                <div class="double-graphic-with-softbuttons-metadata">
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
                    {this.primaryGraphic()}
                    {this.secondaryGraphic()}
                </div>
            </div>
        )
    }
}