import React from 'react';
import { MoreSoftButtons } from '../../containers/Buttons';
import Name from '../../containers/Name';

export default class TilesOnlyBody extends React.Component {

    render() {
        return (
            <div class="tiles-only-body">
                <div class="tiles-only-metadata">
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
            </div>
        )
    }
}