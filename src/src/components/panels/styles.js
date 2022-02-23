import styled from 'styled-components';

const DashboardPanelStyles = styled.div`
    margin: 5rem;
    width: 100%;
    background-color: #ffffff;
    border-radius: 8px;
`;

const DashboardPanelHeading = styled.div`
    background-color: gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    border-radius: 8px 8px 0px 0px;
    
`;

const DashboardPanelDisplay = styled.div`
    border: 2px solid gray;
    height: 88.6%;
    border-radius: 0px 0px 8px 8px;
    border-top: none;
`;

const DashboardPanelText = styled.h2`
    font-size: 3rem;
`

export {DashboardPanelStyles, DashboardPanelHeading, DashboardPanelText, DashboardPanelDisplay}