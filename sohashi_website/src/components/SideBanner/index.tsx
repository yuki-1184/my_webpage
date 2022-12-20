import React from 'react';
import styled from 'styled-components';
import { Side } from '../Layout/style';
import getLogo from '../../data/Icons';

const SocialMedia = [
    { name: 'GitHub', url: 'https://github.com/yuki-1184'}, 
    { name: 'Instagram', url: 'https://www.instagram.com/Satoki716'}, 
    { name: 'Facebook', url: 'https://www.facebook.com/satoki.ohashi.1'}, 
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/satoki-ohashi-4ba513253/'}
]

const StyledSideLeft = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: None;

    ::after {
        content: '';
        display: block;
        width: 1px;
        height: 100px;
        margin: 0 auto;
        margin-top: 20px;
        background-color: #000000;
    }

    li {
        margin: 12px;

        &:hover {
            transform: translateY(-3px);
        }
    }
`

const StyledSideRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: None;

    ::after {
        content: '';
        display: block;
        width: 1px;
        height: 100px;
        margin: 0 auto;
        background-color: #000000;
    }
    
    a {
        margin-bottom: 20px;
        writing-mode: tb-rl;
        transition-property: margin-bottom, color;
        transition: 0.1s;

        &:hover {
            transform: translateY(-3px);
            color: #2C7A7B;
        }
    }
`

export default function SideBar() {
    return (
        <>
            <Side title='left'>
                <StyledSideLeft>
                    {SocialMedia.map(({name, url}) => (
                        <li key={name}>
                            <a href={url} target="_blank" rel="noreferrer">
                                {getLogo(name, '22px', '22px')}
                            </a>
                        </li>
                    ))}
                </StyledSideLeft>
            </Side>
            <Side title='right'>
                <StyledSideRight>
                    <a href='mailto:yuki.1184apple@gmail.com'>yuki.1184apple@gmail.com</a>
                </StyledSideRight>
            </Side>
        </>
        
    )
}
