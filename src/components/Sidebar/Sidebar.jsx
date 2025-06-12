import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import MenuItem from "./MenuItem/MenuItem";
import {bottomRoutes, routes} from "../../constants/routes";
import {Header, Logo, SidebarWrapper, ToggleButton} from "./Basic/Basic";
import {BottomMenu, MainMenu} from "./Basic/Menu";

const Sidebar = ({ color }) => {
    const [isOpened, setIsOpened] = React.useState(false);

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

    return (
        <SidebarWrapper color={color} isOpened={isOpened}>
            <Header>
                <Logo isOpened={isOpened} color={color}>
                    <img src={logo} alt="TensorFlow logo" />
                    <span>TensorFlow</span>
                </Logo>
                <ToggleButton onClick={toggleSidebar} isOpened={isOpened} color={color}>
                    <FontAwesomeIcon color={color === 'dark' ? 'white' : 'black'} icon={isOpened ? 'angle-left' : 'angle-right'} />
                </ToggleButton>
            </Header>
            <MainMenu>
                {
                    routes.map(route => (<MenuItem key={route.title} isOpened={isOpened} color={color} route={route} />))
                }
            </MainMenu>
            <BottomMenu>
                {
                    bottomRoutes.map(route => (<MenuItem key={route.title} isOpened={isOpened} color={color} route={route} />))
                }
            </BottomMenu>
        </SidebarWrapper>
    );
};

export default Sidebar;
