import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveRouter = ({to,children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive}) => isActive ? "active text-danger text-decoration-none" : ""
            }>
                {children}
        </NavLink>
    );
};

export default ActiveRouter;