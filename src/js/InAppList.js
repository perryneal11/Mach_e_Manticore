import React from 'react';

import AppHeader from './containers/Header';
import { VSubMenu, HSubMenu } from './containers/SubMenu';
import store from './store'
import SubmenuDeepFind from './Utils/SubMenuDeepFind'

export default class InAppMenu extends React.Component {
    render() {
        const state = store.getState()
        const app = state.ui[state.activeApp]
        var layout = "LIST"
        if (app && !app.isPerformingInteraction) {
            if (app.activeSubMenu) {
                layout = SubmenuDeepFind(app.menu, app.activeSubMenu, 0).subMenu.menuLayout;
            } else {
                layout = app.menuLayout
            }
        }
        var menu = (layout === "LIST") ? (<VSubMenu />) : (<HSubMenu />)
        var backLink = "/";
        if (app.isPerformingInteraction) {
            backLink = app.displayLayout;
        }
        else if (app.activeSubMenu) {
            backLink = (app.activeMenuDepth > 1) ? "inapplist" : "inappmenu";
        }

        return (
            <div>
          
                { menu }
            </div>
        )
    }
}
