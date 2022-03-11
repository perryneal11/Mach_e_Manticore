import React from 'react';

import AppHeader from './containers/Header';
import { MediaMetadata } from './containers/Metadata';
import ProgressBar from './containers/ProgressBar_c';
import Buttons from './containers/Buttons';
import StatusBar from '../../src/js/containers/StatusBar.js'
import InAppMenu from '../../src/js/InAppMenu';

export default class MediaPlayer extends React.Component {
    render() {
        return (
            <div className="media-template">
                <StatusBar backLink="/" menuName="Apps"/>
                <AppHeader backLink="/" menuName="Apps"/>
                
                <Buttons />
                <InAppMenu/>
            </div>
        )
    }
}
