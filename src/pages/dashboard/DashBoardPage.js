import React from 'react'
import {Link} from "react-router-dom"
import {AppBar} from '../../components/appbar'
import {SideBar} from '../../components/sidebar'

function DashBoardPage (props){

return(
<>
<nav>
            <ul>
                <li>
                    <Link to="/">LoginPage</Link>
                </li>
                <li>
                    <Link to="/dashboard">DashBoard Page</Link>
                </li>
            </ul>
        </nav>
<AppBar/>
<SideBar/>
</>
)
}

export default DashBoardPage