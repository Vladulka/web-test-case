import React from 'react';
import {IconWrapper, Item, TextWrapper} from "../Basic/Item";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {NavLink} from 'react-router-dom';
import {useLocation} from "react-router";

const MenuItem = ({ isOpened, color, route }) => {

    const location = useLocation();
    const isActive = location.pathname === route.path;

    return (
        <NavLink to={route.path} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Item
                key={route.title}
                isOpened={isOpened}
                color={color}
                className={isActive ? 'active' : ''}
                onClick={() => console.log(`going to "${route.path}"`)}
            >
                <IconWrapper isOpened={isOpened}>
                    <FontAwesomeIcon icon={ route.icon }/>
                </IconWrapper>
                <TextWrapper isOpened={isOpened}>{route.title}</TextWrapper>
            </Item>
        </NavLink>
    );
};

export default MenuItem;
