import React from 'react'
import {SideBarStyles, SideBarItem, 
    SideBarItems, DashboardItem} from './styles'
import {AiOutlineDashboard} from "react-icons/ai"
import {FaUser} from "react-icons/fa"
import {FaUsers} from "react-icons/fa"
import {IoStarHalf} from "react-icons/io5"
import {FaShoppingCart} from "react-icons/fa"
import {ImBooks} from "react-icons/im"
import {AiFillTag} from "react-icons/ai"
import {GiPresent} from "react-icons/gi"
import {BsFillCreditCard2BackFill} from "react-icons/bs"
import {AiFillTrophy} from "react-icons/ai"
import {ImRocket} from "react-icons/im"
import {AiFillDollarCircle} from "react-icons/ai"
import {AiFillTags} from "react-icons/ai"
import {ImExit} from "react-icons/im"
import {Link} from "react-router-dom"
function SideBar  (props){
    return(
    <SideBarStyles>
        <SideBarItems>
            <DashboardItem>
            <AiOutlineDashboard class="icon" size="1.75rem"/>Dashboard
            </DashboardItem>
        </SideBarItems>
        <SideBarItems>
        <SideBarItem>
            <a class="sideBarLink" href="#">
            <FaUser class="icon" size="1.75rem"/>Vendors
            </a>
            </SideBarItem>
            <SideBarItem>
            <a class="sideBarLink" href="#">
            <FaUsers class="icon" size="1.75rem"/>Users
            </a>
            </SideBarItem>
        </SideBarItems>
        <SideBarItems>
            <SideBarItem>
            <a class="sideBarLink" href="#">
            <IoStarHalf class="icon" size="1.75rem"/>Reviews
            </a>
            </SideBarItem>
            <SideBarItem>
            <a class="sideBarLink" href="#">
            <FaShoppingCart class="icon" size="1.75rem"/>Orders
            </a>
            </SideBarItem>
            <SideBarItem>
            <a class="sideBarLink" href="#">
            <ImBooks class="icon" size="1.75rem"/>Categories
            </a>
            </SideBarItem>
            <SideBarItem>
            <a class="sideBarLink" href="#">
            <AiFillTag class="icon" size="1.75rem"/>Brands
            </a>
            </SideBarItem>
            <SideBarItem>
            <a class="sideBarLink" href="#">
            <GiPresent class="icon" size="1.75rem"/>Products
            </a>
            </SideBarItem>
            <SideBarItem>
            <a class="sideBarLink" href="#">
            <BsFillCreditCard2BackFill class="icon" size="1.75rem"/>Payments
            </a>
            </SideBarItem>
            <SideBarItem>
            <a class="sideBarLink" href="#">
                <AiFillTrophy class="icon" size="1.75rem"/>Best Sellers
            </a>
            </SideBarItem>
            <SideBarItem>
            <a class="sideBarLink" href="#">
            <ImRocket class="icon" size ="1.75rem"/>Shipments
            </a>
            </SideBarItem>
            <SideBarItem>
            <a class="sideBarLink" href="#">
            <AiFillDollarCircle class="icon" size ="1.75rem"/>Pricing
            </a>
            </SideBarItem>
            <SideBarItem>
            <a class="sideBarLink" href="#">
                <AiFillTags class="icon" size="1.75rem"/>Promotions
            </a>
            </SideBarItem>
        <SideBarItem>
            <Link to="/">
                <ImExit class="icon" size="1.75rem"/>Sign Out
            </Link>
            </SideBarItem>
        </SideBarItems>
    </SideBarStyles>
    )
}

export default SideBar 