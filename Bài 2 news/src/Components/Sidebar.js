import React, { Component } from 'react';
import { CardHeader } from '@material-ui/core';

import { dataSidebar } from '../data';
import SidebarItem from '../Components/SidebarItem'

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <CardHeader
                    title="BÀI VIẾT MỚI"
                    style={{ backgroundColor: "#044D8C", color: "#FFF"}}
                />
                {dataSidebar.map(item => <SidebarItem
                    key={item.id}
                    imgSrc={item.imgSrc}
                    title={item.title}
                    content={item.content}
                />)}
            </div>
        )
    }
}
