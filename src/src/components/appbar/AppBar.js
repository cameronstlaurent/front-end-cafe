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
                <img src="images/logo.png" alt="car"/>
              </AppBarItem>
              <AppBarItem>
              <IconButton><FaUser color="#e12b38" size="1.75rem"/></IconButton>
                <IconButton><MdEmail color="#e12b38" size="1.75rem"/></IconButton>
                <IconButton><IoNotificationsOutline color="#e12b38" size="1.75rem"/></IconButton>
                <IconButton><IoIosSettings color="#e12b38" size="1.75rem"/></IconButton>
              </AppBarItem>
          </AppBarItems>

       </AppBarStyles>
     )
 }
 
 export default AppBar 