 import React from 'react'
 
 import {IoNotificationsOutline} from "react-icons/io5"
 import {IoIosSettings} from "react-icons/io"
 import {FaUser} from "react-icons/fa"
 import {MdEmail} from "react-icons/md"
 import {AppBarStyles, AppBarItem, AppBarItems} from './styles'
 import {IconButton} from './../../ui/buttons'
 function AppBar  (props){
     return(
       <AppBarStyles> 
          <AppBarItems>
              <AppBarItem>
                Branding
              </AppBarItem>
              <AppBarItem>
              <IconButton><FaUser size="1.75rem"/></IconButton>
                <IconButton><MdEmail size="1.75rem"/></IconButton>
                <IconButton><IoNotificationsOutline color="tomato" size="1.75rem"/></IconButton>
                <IconButton><IoIosSettings size="1.75rem"/></IconButton>
              </AppBarItem>
          </AppBarItems>

       </AppBarStyles>
     )
 }
 
 export default AppBar 