import React from 'react'
import './SidebarRight.css';
import SidebarRightRow from './SidebarRightRow';

function SidebarRight() {
    return (
        <div className="sidebarRight">            
            <div className="sidebarRight__friends">
                <h3>Contacts :</h3>
            </div>
            <SidebarRightRow title='Name Surname' />
            <SidebarRightRow title='Contact 1' />
            <SidebarRightRow title='Contact 2' />
            <SidebarRightRow title='Contact 3' />
        </div>
    )
}

export default SidebarRight
