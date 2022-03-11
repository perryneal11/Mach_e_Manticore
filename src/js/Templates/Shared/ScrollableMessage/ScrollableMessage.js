import React from 'react';

import {MessageText} from '../../../containers/Metadata'
import {ScrollableMessageButtons} from '../../../containers/Buttons';
/*** ScrollableMessage RPC doesn't have icon param ***
import Image from './Templates/Shared/Image'
import StaticIcon from './Templates/Shared/StaticIcon'
*** ScrollableMessage RPC doesn't have icon param ***/

export default class ScrollableMessage extends React.Component {
    render() {
        var fill = this.props.theme ? "#FFFFFF" : "#000000";
        /*** ScrollableMessage RPC doesn't have icon param ***
        var icon = this.props.icon ? this.props.icon : { imageType: "STATIC", value: "0xFE" }

        var iconElement = (icon.imageType === "STATIC")
                 ? (<StaticIcon class="alert-icon" image={icon.value} />)
                 : (<div className="alert-icon"><Image class="icon" image={icon.value} isTemplate={icon.isTemplate} fillColor={fill} /></div>);
        *** ScrollableMessage RPC doesn't have icon param ***/
        return (
            <div className="scrollableMessage">
                <div className="scrollableMessage-top">
                    <MessageText/>
                </div>
                <ScrollableMessageButtons classPrefix="scrollableMessage"/>
            </div>
        )
    }
}