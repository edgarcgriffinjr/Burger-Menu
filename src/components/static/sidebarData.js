import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as ImIcons from 'react-icons/im'

export const sidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Tech',
        path: '/tech',
        icon: <FaIcons.FaLaptopCode />,
        cName: 'nav-text'
    },
    {
        title: 'Resources',
        path: '/resources',
        icon: <ImIcons.ImBooks />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiIcons.AiFillContacts />,
        cName: 'nav-text'
    },


]