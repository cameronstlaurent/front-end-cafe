import styled from 'styled-components';

const SideBarStyles   = styled.nav`
    box-shadow:  0 0 2px 1px grey;
     width: 28.7rem;  
`;

 const SideBarItems = styled.ul`
border: 2px solid black;
`;

const SideBarItem = styled.li`
 display: flex;
//  margin-bottom: 1rem;
 align-items: center;
 font-size: 1.75rem;
//  padding-top: 1rem;
//  padding-bottom: 1rem;
padding-left: 6rem;
padding-top: 1rem;
padding-bottom: 1rem;
&:hover {
    background-color: green;
}
 `



export {SideBarStyles, SideBarItem, SideBarItems}