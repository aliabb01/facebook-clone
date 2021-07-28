import React from 'react'
import './SidebarRight.css';
import SidebarRightRow from './SidebarRightRow';

function SidebarRight() {
    return (
        <div className="sidebarRight">            
            <div className="sidebarRight__friends">
                <h3>Contacts :</h3>
            </div>
            <SidebarRightRow title='John Doe' />
            <SidebarRightRow title='Max Wagner' />
            <SidebarRightRow title='Kaitlyn Mcgee' />
            <SidebarRightRow title='Jack Parker' />
        </div>
    )
}

export default SidebarRight
