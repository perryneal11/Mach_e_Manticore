import React from 'react';
import { withRouter } from 'react-router-dom';
import Modal from 'react-modal'
import Alert from './Alert';
import SubtleAlert from './SubtleAlert';
import ScrollableMessage from './Templates/Shared/ScrollableMessage/ScrollableMessage';
import MenuIcon from './containers/MenuIcon';
import Name from './containers/Name';
import MenuLink from './containers/AppsButton'
import store from './store'
import {resetShowAppMenu} from './actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import uiController from './Controllers/UIController'

import { MediaMetadata, NonMediaMetadata, DoubleGraphic, LargeGraphic, LargeGraphicOnly, TilesOnly, TextButtonsOnly   } from './containers/Metadata';
import AppIcon from './AppIcon.js'


import {ReactComponent as IconMenu} from '../img/icons/icon-menu.svg'
import {ReactComponent as IconCart} from '../img/icons/icon-cart.svg'
import {ReactComponent as Phone} from '../img/icons/Phone_Domain_Answer_Call.svg'
import {ReactComponent as Nav} from '../img/icons/Navigation_Domain.svg'
import {ReactComponent as FM} from '../img/icons/FM_Radio.svg'

class AppStoreIcon extends React.Component {
    render() {
        return (<div>
                <Link to="/appstore">
                    <div className="app-icon">
                        <div className="static-icon">
                            <span className="svg-wrap">
                                <IconCart/>
                            </span>
                        </div>
                    </div>
                </Link>
            </div>);
    }
}

class AppStoreMenuIcon extends React.Component {
    render() {
        return (<div>
                <Link to="/appstoremenu">
                    <span className="svg-wrap">
                        <IconMenu/>
                    </span>
                </Link>
            </div>);
    }
}


class AppTrayHeader extends React.Component {
    render() {
        return (<div className = "app_header_phone_radio_nav_wrap">
            <div className="phone_app_header">
                <span className="app_tray_app_header_block">
                        <Phone className="app_tray_app_header_icon"/>
                            <p className="app_tray_app_header_icon_text">Dev</p>
                    </span>
                    </div>
                <div className="radio_app_header">
                <span className="app_tray_app_header_block">
                        <FM className="app_tray_app_header_icon"/>
                            <p className="app_tray_app_header_icon_text">95.5 HD1</p>
                    </span>
                    </div>
                <div className="nav_app_header">
                <span className="app_tray_app_header_block">
                        <Nav className="app_tray_app_header_icon"/>
                            <p className= "app_tray_app_header_icon_text">The English Gardens</p>
                    </span>
                    </div>
            </div>);
    }
}

class AppHeader extends React.Component {

    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.closeModalScollableMessage = this.closeModalScollableMessage.bind(this);

    }

    closeModal() {
        if (this.props.alertIsSubtle) {
            this.props.showAlert = false;
            this.forceUpdate();
            uiController.onDefaultAction({ msgID: this.props.alertMsgId, appID: this.props.alertAppId }, this.props.activeApp, true);
        }
    }

    closeModalScollableMessage() {
        this.props.showScrollableMessage = false;
        this.forceUpdate();
        uiController.onDefaultActionScrollableMessage({ msgID: this.props.scrollableMessageMsgId, appID: this.props.scrollableMessageAppId }, this.props.activeApp);
    }

    getColorScheme() {
        if (this.props.colorScheme) {
            var redInt = this.props.colorScheme.red;
            var blueInt = this.props.colorScheme.blue;
            var greenInt = this.props.colorScheme.green;
            var cssColorScheme = {
                backgroundColor: `rgb(${redInt}, ${greenInt}, ${blueInt})`,
                backgroundImage: `none`
            }
            return cssColorScheme;
        } else {
            return null;
        }
    }

    render() {
        const themeClass = this.props.theme ? 'dark-theme' : 'light-theme';
        var modalClass = themeClass + " " + (this.props.alertIsSubtle ? "subtleAlertOverlay" : "alertOverlay");
        var scrollableMessageModalClass = "scrollableMessageOverlay scrollableMessageOverlay" + "__" + themeClass;
        var isShowingMenu = this.props.location.pathname === '/inappmenu';
        var isShowingSubMenu = this.props.location.pathname === '/inapplist';
        var icon = this.props.icon === 'false' ? (<div />) 
            : <MenuIcon 
                isShowingMenu={isShowingMenu || isShowingSubMenu}
                activeSubMenu={this.props.activeSubMenu ? true : false} /> ;

        if (this.props.icon === 'store') {
            if (this.props.isAppStoreConnected) {
                icon = this.props.location.pathname === '/appstore' ? (<AppStoreMenuIcon />) : (<AppStoreIcon />);
            }
            else{
                icon = (<AppIcon></AppIcon>)
            }
        }

        var colorScheme = null;
        colorScheme = this.getColorScheme();

        var alertHtml = this.props.alertIsSubtle
                            ? (<SubtleAlert alertName={this.props.alertName} icon={this.props.alertIcon} theme={this.props.theme}/>)
                            : (<Alert alertName={this.props.alertName} icon={this.props.alertIcon} theme={this.props.theme}/>);

        var scrollableMessageHtml = (<ScrollableMessage theme={this.props.theme}/>);

        // Determine backLink for special case when showing submenu
        var backLink = this.props.backLink;
        if (this.props.activeSubMenu) {
            backLink = (this.props.activeMenuDepth > 1) ? "/inapplist" : "/inappmenu";
        } else if (isShowingMenu) {
            backLink = this.props.activeLayout;
        }

        var header = (<AppTrayHeader/>);
        var name =  null
        var appHeadergradientBlockClass = "app_header_gradient_block";
        if(this.props.location.pathname == '/media'){
            
            header = (<div>
                <MediaMetadata/>
                
                </div>);
            appHeadergradientBlockClass = "app_header_gradient_block_media"
        }
        else if(this.props.location.pathname == '/double-graphic-with-softbuttons') {
            header = (<DoubleGraphic class="double-graphic-with-softbuttons-top-container"/>);
            appHeadergradientBlockClass = "app_header_gradient_block_media"
        }
        else if(this.props.location.pathname == '/large-graphic-only') {
            header = (<LargeGraphicOnly class="large-graphic-only"/>);
            appHeadergradientBlockClass = "app_header_gradient_block_media"
        }
        else if(this.props.location.pathname == '/large-graphic-with-softbuttons') {
            header = (<LargeGraphic class="large-graphic-with-softbuttons-top-container"/>);
            appHeadergradientBlockClass = "app_header_gradient_block_media"
        }
        else if(this.props.location.pathname == '/tiles-with-graphic') {
            header = (<LargeGraphic class="large-graphic-with-softbuttons-top-container"/>);
            appHeadergradientBlockClass = "app_header_gradient_block_media"
        }
        else if(this.props.location.pathname == '/tiles-only') {
            header = (<TilesOnly />);
            appHeadergradientBlockClass = "app_header_gradient_block_media"
        }
        else if (this.props.location.pathname =='/text-buttons-only') {
            header = (<TextButtonsOnly />);
            appHeadergradientBlockClass = "app_header_gradient_block_media"
        }
        else {
            name = (<Name className = "media-app-name" />)
            header = (<AppTrayHeader/>);
        }

        
        return (
            <div className={appHeadergradientBlockClass} >
                <div className="app__header" style={colorScheme}>   
                    {icon}               
                    {name}
                    <Modal
                    isOpen={this.props.showAlert}
                    className={`${this.props.alertIsSubtle ? 'subtleAlertModal' : 'alertModal'}`}
                    overlayClassName={modalClass}
                    contentLabel="Example Modal"
                    onRequestClose={this.closeModal}
                    >
                        {alertHtml}
                    </Modal>
                    <Modal
                    isOpen={this.props.showScrollableMessage}
                    className="scrollableMessageModal"
                    overlayClassName={scrollableMessageModalClass}
                    contentLabel="Example Modal"
                    onRequestClose={this.closeModalScollableMessage}
                    >
                        {scrollableMessageHtml}
                    </Modal>
                    {header}
                </div>
            </div>
        )
    }
    componentWillReceiveProps (nextProps) {
        // TODO: this will not allow performInteraction while browsing a submenu
        // not sure if that's okay
        if (!this.props.isDisconnected 
            && nextProps.isDisconnected 
            && nextProps.location.pathname !== "/" 
            && nextProps.location.pathname !== "/appstore" 
            && nextProps.location.pathname !== "/appstoremenu") {
            this.props.history.push("/")
        }
        else if (nextProps.location.pathname !== "/inapplist"
            && nextProps.isPerformingInteraction 
            && this.props.location.pathname !== "/media" 
            && this.props.location.pathname !== "/nonmedia"
            && this.props.location.pathname !== "/web-view"
            && this.props.location.pathname !== "/large-graphic-only"
            && this.props.location.pathname !== "/large-graphic-with-softbuttons"
            && this.props.location.pathname !== "/tiles-with-graphic"
            && this.props.location.pathname !== "/graphic-with-text-buttons"
            && this.props.location.pathname !== "/text-buttons-with-graphic"
            && this.props.location.pathname !== "/tiles-only"
            && this.props.location.pathname !== "/text-buttons-only"
            && this.props.location.pathname !== "/text-with-graphic"
            && this.props.location.pathname !== "/graphic-with-text"
            && this.props.location.pathname !== "/double-graphic-with-softbuttons") {
                this.props.history.push("/inapplist")
        }
        // We are in the app list and previously performing interaction but not anymore. This means time to switch out
        // this happens currently when the perform interaction times out, the prop isPerformingInteraction goes to false
        else if (nextProps.location.pathname === "/inapplist"
            && this.props.isPerformingInteraction
            && !nextProps.isPerformingInteraction) {
                this.props.history.push("/" + nextProps.displayLayout)                
        }
        else if (this.props.displayLayout !== nextProps.displayLayout) {
            if(nextProps.activeApp) {
                this.props.history.push("/" + nextProps.displayLayout)                
            }
        }
        else if(this.props.activeApp !== nextProps.activeApp) {            
            if(!this.props.activeApp && nextProps.activeApp) {
                this.props.history.push("/" + nextProps.displayLayout)
            }
        }
        else if(nextProps.triggerShowAppMenu){
            if(nextProps.activeSubMenu){
                // If menuID is specified, activate that sub menu
                if(this.props.location.pathname !== "/inapplist" 
                && this.props.location.pathname !== "/media" 
                && this.props.location.pathname !== "/nonmedia"
                && this.props.location.pathname !== "/web-view"
                && this.props.location.pathname !== "/large-graphic-only"
                && this.props.location.pathname !== "/large-graphic-with-softbuttons"
                && this.props.location.pathname !== "/tiles-with-graphic"
                && this.props.location.pathname !== "/graphic-with-text-buttons"
                && this.props.location.pathname !== "/text-buttons-with-graphic"
                && this.props.location.pathname !== "/tiles-only"
                && this.props.location.pathname !== "/text-buttons-only"
                && this.props.location.pathname !== "/text-with-graphic"
                && this.props.location.pathname !== "/graphic-with-text"
                && this.props.location.pathname !== "/double-graphic-with-softbuttons"){
                    this.props.history.push('/inapplist')    
                }
            }
            else{
                // If NO menuID is specifed, show menu 
                if(this.props.location.pathname !== "/inappmenu" 
                && this.props.location.pathname !== "/media" 
                && this.props.location.pathname !== "/nonmedia"
                && this.props.location.pathname !== "/web-view"
                && this.props.location.pathname !== "/large-graphic-only"
                && this.props.location.pathname !== "/large-graphic-with-softbuttons"
                && this.props.location.pathname !== "/tiles-with-graphic"
                && this.props.location.pathname !== "/graphic-with-text-buttons"
                && this.props.location.pathname !== "/text-buttons-with-graphic"
                && this.props.location.pathname !== "/tiles-only"
                && this.props.location.pathname !== "/text-buttons-only"
                && this.props.location.pathname !== "/text-with-graphic"
                && this.props.location.pathname !== "/graphic-with-text"
                && this.props.location.pathname !== "/double-graphic-with-softbuttons"){
                    this.props.history.push('/inappmenu')    
                }    
            }
            store.dispatch(resetShowAppMenu(nextProps.activeApp))
        }

    }
}

const mapStateToProps = (state) => {
    return {
        isAppStoreConnected: state.appStore.isConnected
    }
}
AppHeader = connect(mapStateToProps)(AppHeader)

export default withRouter(AppHeader)
