import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarRightRow.css';

function SidebarRightRow({ title }) {
    return (
        <div className="sidebarRightRow">
            <Avatar />
            <h4 className="sidebarRightRow__friendName">{title}</h4>
        </div>
    )
}

export default SidebarRightRow
