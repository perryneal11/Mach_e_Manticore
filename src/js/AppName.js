import React from 'react'
import {ReactComponent as TitleSeparator} from '../img/static/0xFF.svg'
import {ReactComponent as RightArrow} from '../img/icons/RightArrow.svg'

export default class AppName extends React.Component {
    render () {
        let greeting1 = 'GOOD'
        let greeting2 = 'MORNING'
        let isShowingMenu = this.props.location.pathname === '/inappmenu'
        let isShowingSubMenu = (this.props.location.pathname === '/inapplist' && this.props.subMenuName)
        let subTitle = this.props.templateTitle
        subTitle = (isShowingMenu) ? "Menu" : subTitle
        subTitle = (isShowingSubMenu) ? this.props.subMenuName : subTitle 

        var greeting_html = <span className="app_header_greeting th-f-color-alt"><p>{greeting1}</p><p>{greeting2}</p></span>
        var greeting_arrow = <RightArrow className="arrow_format"/>
        var nameClass = 't-oneline'
        if (this.props.location.pathname != '/'){
            
            greeting_html = null
            greeting_arrow = null
            nameClass = 'app-name-media'
        }

        let name = this.props.location.pathname ==='/appstore' ? 'App Store' : this.props.location.pathname ==='/appstoremenu' ? 'Installed Apps' : this.props.name;
        let appName_html = <span className="app_tray_app_header_app_name th-f-color-secondary">{name}</span>
        let separator_html = (subTitle) ? <span className="svg-wrap-secondary"><TitleSeparator/></span> : null
        let subTitle_html = (subTitle) ? <span className="t-small t-light th-f-color-secondary">{subTitle}</span> : null

        return (
            <div>
                {greeting_html}
                {greeting_arrow}
                <p>
                    {appName_html}
                    {separator_html}
                    {subTitle_html}
                </p>
            </div>
        )
    }
}