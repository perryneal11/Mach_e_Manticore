import React from 'react'

export default class ScrollableMessageHTMLBody extends React.Component {
    render() {
        return (
            <div className="scrollable-message-text">
                <p>{this.props.scrollableMessageBody}</p>
            </div>
        )
    }
}