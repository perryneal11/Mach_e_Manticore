import React from 'react';

import VScrollMenuItem from './VScrollMenuItem';
import MenuFooter from './MenuFooter'
import { subscribeButton } from './actions';
import store from './store'


export default class VScrollMenu extends React.Component {
    constructor(props) {
        super(props);
        this.hiddenNames = [];
    }

    clearHiddenNames() { 
        this.hiddenNames = [];
    }

    pushHiddenName(name) {
        this.hiddenNames.push(name)
    }

    render() {
        const state = store.getState()
        const app = state.ui[state.activeApp]
        var presetsSubscribed = app.subscribedButtons.PRESET_0
        var presetButtons = []
        this.clearHiddenNames();
        console.log(this.props)
        if (presetsSubscribed == true){
            if (app.subscribedButtons.PRESET_0 === true) {
                presetButtons.push({
                    name: "PRESET_0",
                })
            }
            if (app.subscribedButtons.PRESET_1 === true) {
                presetButtons.push({
                    name: "PRESET_1",
                })
            }
            if (app.subscribedButtons.PRESET_2 === true) {
                presetButtons.push({
                    name: "PRESET_2",
                })
            }
            if (app.subscribedButtons.PRESET_3 === true) {
                presetButtons.push({
                    name: "PRESET_3",
                })
            }
            if (app.subscribedButtons.PRESET_4 === true) {
                presetButtons.push({
                    name: "PRESET_4",
                })
            }
            if (app.subscribedButtons.PRESET_5 === true) {
                presetButtons.push({
                    name: "PRESET_5",
                })
            }
            if (app.subscribedButtons.PRESET_6 === true) {
                presetButtons.push({
                    name: "PRESET_6",
                })
            }
            if (app.subscribedButtons.PRESET_7 === true) {
                presetButtons.push({
                    name: "PRESET_7",
                })
            }
            if (app.subscribedButtons.PRESET_8 === true) {
                presetButtons.push({
                    name: "PRESET_8",
                })
            }
            if (app.subscribedButtons.PRESET_9 === true) {
                presetButtons.push({
                    name: "PRESET_9",
                })
            }

            var dynamicDisplayItems = presetButtons.map((presetItem) => {
                if (presetItem.hidden) {
                    this.pushHiddenName(presetItem.name)
                    return null;
                }
                return (<div key={presetItem.cmdID + presetItem.name} class='menu-item-div'>
                <VScrollMenuItem
                    appID={presetItem.appID}
                    cmdID={presetItem.cmdID}
                    menuID={presetItem.menuID}
                    menuItem={presetItem} 
                    isPerformingInteraction={this.props.isPerformingInteraction}
                    interactionId={this.props.interactionId ? this.props.interactionId : 0}
                    onSelection={this.props.onSelection}
                    image={presetItem.image}
                    imageType={presetItem.imageType}
                    isTemplate={presetItem.isTemplate}
                    theme={this.props.theme}
                    enabled={presetItem.enabled}
                />
            </div>)
            });

            var DropDownDisplayItems = this.props.data.map((menuItem) => {
                if (menuItem.hidden) {
                    this.pushHiddenName(menuItem.name)
                    return null;
                }
                return (<div key={menuItem.cmdID + menuItem.name} class='drop-down-item-div'>
                <VScrollMenuItem
                    appID={menuItem.appID}
                    cmdID={menuItem.cmdID}
                    menuID={menuItem.menuID}
                    menuItem={menuItem} 
                    isPerformingInteraction ={this.props.isPerformingInteraction}
                    interactionId={this.props.interactionId ? this.props.interactionId : 0}
                    onSelection={this.props.onSelection}
                    image={menuItem.image}
                    imageType={menuItem.imageType}
                    isTemplate={menuItem.isTemplate}
                    theme={this.props.theme}
                    enabled={menuItem.enabled}
                    type = 'dropdown'
                />
            </div>)


        });
    }
        else 
            var dynamicDisplayItems = this.props.data.map((menuItem) => {
                if (menuItem.hidden) {
                    this.pushHiddenName(menuItem.name)
                    return null;
                }
                return (<div key={menuItem.cmdID + menuItem.name} class='menu-item-div'>
                <VScrollMenuItem
                    appID={menuItem.appID}
                    cmdID={menuItem.cmdID}
                    menuID={menuItem.menuID}
                    menuItem={menuItem} 
                    isPerformingInteraction={this.props.isPerformingInteraction}
                    interactionId={this.props.interactionId ? this.props.interactionId : 0}
                    onSelection={this.props.onSelection}
                    image={menuItem.image}
                    imageType={menuItem.imageType}
                    isTemplate={menuItem.isTemplate}
                    theme={this.props.theme}
                    enabled={menuItem.enabled}
                    
                />
            </div>)
            });
        var hiddenCommands = null;
        if (this.hiddenNames.length) {
            hiddenCommands = <MenuFooter/>
        }

        
        if (presetsSubscribed == true){

            var firstItem = DropDownDisplayItems[0]
            DropDownDisplayItems.splice(0,1)
            return (
                <div>
                    <div class = "dropdown">
                        <div class = "dropdown-button">
                            {firstItem}
                            <div class = "dropdown-content">
                                {DropDownDisplayItems}
                                {hiddenCommands}
                            </div>
                        </div>
                    </div>    
                    <div className="vscrollmenu">
                        
                                {dynamicDisplayItems} 
                                { hiddenCommands }
                    </div>
                </div>
            )
        }
        else 
        return (
            <div className="vscrollmenu">
                { dynamicDisplayItems }
                { hiddenCommands }
            </div>
        )
    }
}
