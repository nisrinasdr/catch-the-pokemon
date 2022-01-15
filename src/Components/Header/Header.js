import React from 'react'
import { HeaderWrap, BigIcon } from './HeaderStyles'

import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <HeaderWrap>
            <Link to={`/`} style={{textDecoration:"none"}}>
                <h1 >Pokemon</h1>
            </Link>
            
            <BigIcon>
                <Link to={`/my-pokemon`} style={{textDecoration:"none"}}>
                    <FaBookmark style={{color:"#fff"}}/>
                </Link>
            </BigIcon>
            
        </HeaderWrap>
    )
}

export default Header
