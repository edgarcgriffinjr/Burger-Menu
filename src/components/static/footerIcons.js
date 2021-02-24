import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'

export const FooterIcons = [
    {
        title: 'Email',
        path: 'mailto: edgarcgriffinjr@gmail.com',
        icon: <MdIcons.MdEmail />,
        cName: 'footer-icons'
    },
    {
        title: 'LinkedIn',
        path: 'https://www.linkedin.com/in/edgarcgriffinjr/',
        icon: <FaIcons.FaLinkedinIn />,
        cName: 'footer-icons'
    },
    {
        title: 'Github',
        path: 'https://github.com/edgarcgriffinjr',
        icon: <AiIcons.AiOutlineGithub />,
        cName: 'footer-icons'
    },
    {
        title: 'Code',
        path: 'https://www.github.com/edgarcgriffinjr/BurgerMenu',
        icon: <BiIcons.BiCodeAlt />,
        cName: 'footer-icons'
    }
]