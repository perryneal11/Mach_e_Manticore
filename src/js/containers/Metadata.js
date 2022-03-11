import { connect } from 'react-redux'
import MediaPlayerBody from '../MediaPlayerBody'
import NonMediaBody from '../Templates/NonMedia/NonMediaBody'
import LargeGraphicBody from '../Templates/Shared/LargeGraphicBody'
import LargeGraphicOnlyBody from '../Templates/LargeGraphicOnly/LargeGraphicOnlyBody'
import TilesOnlyBody from '../Templates/TilesOnly/TilesOnlyBody'
import TextButtonsOnlyBody from '../Templates/TextButtonsOnly/TextButtonsOnlyBody'
import AlertBody from '../AlertBody'
import ScrollableMessageHTMLBody from '../Templates/Shared/ScrollableMessage/ScrollableMessageHTMLBody'
import TextBody from '../Templates/Shared/TextBody'
import DoubleGraphicBody from '../Templates/DoubleGraphicWithSoftbuttons/DoubleGraphicBody'

const mapStateToProps = (state) => {
    var activeApp = state.activeApp
    var metadata = state.ui[activeApp] ? state.ui[activeApp] : null
    var props = {
        mainField1: null,
        mainField2: null,
        mainField3: null,
        mainField4: null,
        alertText1: null,
        alertText2: null,
        alertText3: null,
        scrollableMessageBody: null,
        graphic: null,
        secondaryGraphic: null,
        theme: null,
        statusBar: null,
        mediaClock: null
    }

    props.theme = state.theme

    if(metadata) {
        Object.keys(metadata.showStrings).forEach((fieldName) => {
            switch (fieldName) {
                case "mainField1":
                    props.mainField1 = metadata.showStrings[fieldName]
                    break
                case "mainField2":
                    props.mainField2 = metadata.showStrings[fieldName]
                    break
                case "mainField3":
                    props.mainField3 = metadata.showStrings[fieldName]
                    break
                case "mainField4":
                    props.mainField4 = metadata.showStrings[fieldName]
                    break
                case "statusBar":
                    props.statusBar = metadata.showStrings[fieldName]
                    break
                case "mediaClock":
                    props.mediaClock = metadata.showStrings[fieldName]
                    break    
                default:
                    break;
            }
        })
        props.graphic = metadata.graphic ? metadata.graphic : null
        props.secondaryGraphic = metadata.secondaryGraphic ? metadata.secondaryGraphic : null
    }

    for(var app in state.ui) {
        if(state.ui[app].alert.showAlert) {
            state.ui[app].alert.alertStrings.forEach((textField) => {
                switch (textField.fieldName) {
                    case "alertText1":
                        props.alertText1 = textField.fieldText
                        break
                    case "alertText2": 
                        props.alertText2 = textField.fieldText
                        break
                    case "alertText3":
                        props.alertText3 = textField.fieldText
                        break
                    default:
                        break
                }
            })
        }
        if(state.ui[app].scrollableMessage.showScrollableMessage) {
            console.log("DB - Metadata.js scrollableMessage object -> \n" + JSON.stringify(state.ui[app].scrollableMessage))
            props.scrollableMessageBody = state.ui[app].scrollableMessage.messageText.fieldText  
        }
    }

    if(!state.ui[activeApp]) { 
        //No active app, do not assign color scheme
        return props
    }

    //Assign color scheme to props
    var theme = state.theme
    if (theme === true) { //Dark theme
        if(state.ui[activeApp].nightColorScheme) {
            if(state.ui[activeApp].nightColorScheme.backgroundColor) {
                props.colorScheme = state.ui[activeApp].nightColorScheme.backgroundColor
            }
        }
    } else {
        if(state.ui[activeApp].dayColorScheme) { //Light theme
            if(state.ui[activeApp].dayColorScheme.backgroundColor) {
                props.colorScheme = state.ui[activeApp].dayColorScheme.backgroundColor
            }
        }
    }
    
    return props
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export const MediaMetadata = connect(
    mapStateToProps,
    mapDispatchToProps
)(MediaPlayerBody)

export const NonMediaMetadata = connect(
    mapStateToProps,
    mapDispatchToProps
)(NonMediaBody)

export const LargeGraphic = connect(
    mapStateToProps,
    mapDispatchToProps
)(LargeGraphicBody)

export const LargeGraphicOnly = connect(
    mapStateToProps,
    mapDispatchToProps
)(LargeGraphicOnlyBody)

export const TilesOnly = connect(
    mapStateToProps,
    mapDispatchToProps
)(TilesOnlyBody)

export const TextButtonsOnly = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextButtonsOnlyBody)

export const AlertStrings = connect(
    mapStateToProps,
    mapDispatchToProps
)(AlertBody)

export const MessageText = connect(
    mapStateToProps,
    mapDispatchToProps
)(ScrollableMessageHTMLBody)

export const TextFields = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextBody)

export const DoubleGraphic = connect(
    mapStateToProps,
    mapDispatchToProps
)(DoubleGraphicBody)

export default MediaMetadata