import React from 'react';
import Name from './containers/Name';
import AlbumArt from './AlbumArt';
import MediaTrackInfo from './containers/MediaTrackInfo_c'
import ProgressBar from './containers/ProgressBar_c';

export default class MediaPlayerBody extends React.Component {
    getColorScheme() {
        if (this.props.colorScheme) {
            var redInt = this.props.colorScheme.red;
            var blueInt = this.props.colorScheme.blue;
            var greenInt = this.props.colorScheme.green;
            var cssColorScheme = {
                backgroundColor: `rgb(${redInt}, ${greenInt}, ${blueInt})`
            }
            return cssColorScheme;
        } else {
            return null;
        }
    }

    render() {
        var value = null;
        var type = null;
        var templateImage = null;
        var theme = null;
        if(this.props.graphic) {
            value = this.props.graphic.value ? this.props.graphic.value : null;
            type = this.props.graphic.imageType ? this.props.graphic.imageType : null;
            templateImage = this.props.graphic.isTemplate ? this.props.graphic.isTemplate : null;
            theme = this.props.theme ? this.props.theme : null;
        }

        var progressBar = null;
        var showLines_html = null;
        var lineOne = null;
        var lineTwo = null;
        var lineThree = null;
        var lineFour = null;
        lineOne = this.props.mainField1 ? <p className="media-show-line">{this.props.mainField1}</p> : null;
        lineTwo = this.props.mainField2 ? <p className="media-show-line">{this.props.mainField2}</p> : null;
        lineThree = this.props.mainField3 ? <p className="media-show-line">{this.props.mainField3}</p> : null;
        lineFour = this.props.mainField4 ? <p className="media-show-line">{this.props.mainField4}</p> : null;
        console.log("DB - MediaPlayerBody.js this.props.statusBar -> " + JSON.stringify(this.props));
        if (this.props.statusBar) {
            progressBar = (<ProgressBar />);
            console.log("DB - something to progress...");

            if (lineOne && lineTwo) {
                showLines_html = <span>{lineOne}{lineTwo}</span>
            } else if (lineOne && lineThree) {
                showLines_html = <span>{lineOne}{lineThree}</span>
            } else if (lineOne && lineFour) {
                showLines_html = <span>{lineOne}{lineFour}</span>
            } else if (lineTwo && lineThree) {
                showLines_html = <span>{lineTwo}{lineThree}</span>
            } else if (lineTwo && lineFour) {
                showLines_html = <span>{lineTwo}{lineFour}</span>
            } else if (lineThree && lineFour) {
                showLines_html = <span>{lineThree}{lineFour}</span>
            }
        } else {
            showLines_html = <span>{lineOne}{lineTwo}{lineThree}{lineFour}</span>
        }
        return (
            <div className="media-player-body" style={this.getColorScheme()}>
                
                <div className="media-track">
                    <div className="media-metadata">
                        <Name/>
                        {showLines_html}
                    </div>
                    <AlbumArt image={value} imageType={type} isTemplate={templateImage} theme={theme}/>
                    {progressBar}
                    <MediaTrackInfo />
                </div>
            </div>
        )
    }
}
