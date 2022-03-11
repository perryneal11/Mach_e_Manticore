import React from 'react';

import {ReactComponent as BatteryCharging} from '../../img/icons/battery_charging.svg'
import {ReactComponent as LocationData} from '../../img/icons/location_data.svg'
import {ReactComponent as Wifi} from '../../img/icons/wifi.svg'
import {ReactComponent as BatteryLife} from '../../img/icons/battery_life.svg'
import {ReactComponent as CellStrength} from '../../img/icons/cell_strength.svg'
import {ReactComponent as DarkDots} from '../../img/icons/darkdots.svg'
import {ReactComponent as LightDots} from '../../img/icons/lightdots.svg'
import MenuLink from '../containers/AppsButton'

class StatusBar extends React.Component {
    render(){
        
      
 
        return(

        <div className="status_bar">
            <div className="app_tray_button_round"></div>
                <MenuLink backLink="/"/>
                <BatteryCharging className="status_bar_icon_battery_charging"/>
                <LocationData className="status_bar_icon"/>
                <Wifi className="status_bar_icon"/>
                <BatteryLife className="status_bar_icon"/>
                <CellStrength className="status_bar_icon"/>
                
                <span className="status_bar_text_time">3:00</span>
                <br/>
                <span className="status_bar_text_temp">80&deg;</span>
            
        </div>
    )
    }

}

export default StatusBar