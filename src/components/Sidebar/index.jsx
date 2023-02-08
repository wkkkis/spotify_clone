import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { routes } from '../../utils/routes'
import { FaSpotify } from "react-icons/fa"
import { BsFillHouseDoorFill } from "react-icons/bs"
import { RiSearchLine } from "react-icons/ri"
import { BiLibrary } from "react-icons/bi"

//Styles
import "./Sidebar.scss"

const links = [
    {
        name: "Главная",
        url: routes.main,
        icon: (
            <BsFillHouseDoorFill />
        )
    },
    {
        name: "Поиск",
        url: routes.search,
        icon: (
            <RiSearchLine />
        )
    },
    {
        name: "Медиатека",
        url: routes.mediateka,
        icon: (
            <BiLibrary />
        )
    }
]

const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <FaSpotify style={{ fontSize: "50px" }} />
                <span>Spotify</span>
            </div>

            <div className="sidebar__links">
                {
                    links.map((item) => (
                        <NavLink 
                            className="sidebar__links__item" 
                            to={item.url}
                            key={item.url}
                        >
                            <div className="icon">
                                {item.icon}
                            </div>
                            {item.name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar