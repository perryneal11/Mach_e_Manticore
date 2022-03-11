import React from 'react';
//import SoftButtonImage from './Templates/Shared/SoftButtonImage'  // ScrollableMessageButtons don't support image

export default class ScrollabelMessageButtons extends React.Component {
    constructor(props) {
        super(props);
        this.getAction = this.getAction.bind(this)
    }
    getAction(softButton) {
        var action = null
        var scrollableMessage = {
            msgID: softButton.msgID,
            appID: softButton.appID,
            buttonID: softButton.softButtonID,
            buttonName: "CUSTOM_BUTTON",
            timeout: softButton.duration
        }
        if(softButton.systemAction === "STEAL_FOCUS") {
            action = this.props.onStealFocusScrollableMessage(scrollableMessage, this.props.appID)
        } else if (softButton.systemAction === "KEEP_CONTEXT") {
            action = this.props.onKeepContextScrollableMessage(scrollableMessage)
        } else {
            action = this.props.onDefaultActionScrollableMessage(scrollableMessage, this.props.appID)
        }

        return action
    }
    render() {
        var softButtons = this.props.scrollableMessageButtons
        var items;
        if(!softButtons){
            return (null)
        }

        if(softButtons.length === 1) {
            items = softButtons.map((softButton, index) => {               
                return (<div className={`${this.props.classPrefix}-button-1 th-f-color t-small t-light th-bg-color th-soft-buttons`}
                            key={softButton.softButtonID}
                            onClick={() => this.getAction(softButton)}>
                                <p>{softButton.text}</p>                                   
                        </div>)
            })
        } else if (softButtons.length === 2) {
            items = softButtons.map((softButton, index) => {
                return (<div className={`${this.props.classPrefix}-button-2 th-f-color t-small t-light th-bg-color th-soft-buttons`}
                            key={softButton.softButtonID}
                            onClick={() => this.getAction(softButton)}>
                                <p>{softButton.text}</p>                                    
                        </div>)
            })
        } else if (softButtons.length === 3) {
            items = softButtons.map((softButton, index) => {
                return (<div className={`${this.props.classPrefix}-button-3 th-f-color t-small t-light th-bg-color th-soft-buttons`}
                            key={softButton.softButtonID}
                            onClick={() => this.getAction(softButton)}>
                                <p>{softButton.text}</p>                                    
                        </div>)
            })            
        } else if (softButtons.length === 4) {
            items = softButtons.map((softButton, index) => {
                return (<div className={`${this.props.classPrefix}-button-4 th-f-color t-small t-light th-bg-color th-soft-buttons`}
                            key={softButton.softButtonID}
                            onClick={() => this.getAction(softButton)}>
                                <p>{softButton.text}</p>                                    
                        </div>)
            })         
        }

        return (
            <div className={`${this.props.classPrefix}-buttons`}>
                {items}
            </div>
        )        
    }
}
