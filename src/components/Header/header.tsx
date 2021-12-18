import React from "react";
import head from './header.module.css'


export const Header = () => {
    return (
        <div className={head.header}>
            <img className={head.logo} src="https://cdn.shopify.com/s/files/1/0921/8620/files/Element-Icon-Big.png?v=1584704418"/>
        </div>
    )
}