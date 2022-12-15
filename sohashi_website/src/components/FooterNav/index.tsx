import React from 'react';
import { Link } from '@chakra-ui/react';
import styled from 'styled-components';
import './style.css';

type FooterNavProps = {
    children: string,
    goto: string
}

const FooterNav = ({children, goto}: FooterNavProps) => {
    return (
        <div className='container'>
          <Link className="animated-arrow" href={goto} sx={{ textDecoration: 'none' }}>
            <span className="the-arrow -left">
              <span className="shaft"></span>
            </span>
            <span className="main">
              <p className="text">
                {children}
              </p>
              <span className="the-arrow -right">
                <span className="shaft"></span>
              </span>
            </span>
          </Link>
        </div>
    )
}

// const StyledFooterNav = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     z-index: -3;

//     .span {
//         width: 64px;
//         transition: all 0.2s;

//         ${props.allowDirection === 'left'}
//     }



// `

export default FooterNav;
