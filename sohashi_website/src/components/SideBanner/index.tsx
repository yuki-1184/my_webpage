import React from 'react';
import styled from 'styled-components';
import { Side } from '../Layout/style';
import getLogo from '../../data/Icons';
import { HStack } from '@chakra-ui/react';

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
    margin: 0;
    padding: 0;
    list-style: None;

    ::after {
        content: '';
        display: block;
        width: 1px;
        height: 100px;
        margin: 0 auto;
        background-color: #000000;
    }
    li {
        &:last-of-type {
          margin-bottom: 15px;
        }
    
        a {
          padding: 10px;
    
          &:hover,
          &:focus {
            transform: translateY(-3px);
          }
        }
    }
`

const StyledSideRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: None;

    ::after {
        content: '';
        display: block;
        width: 1px;
        height: 100px;
        margin: 0 auto;
        background-color: #000000;
    }
    
    p {
        margin-bottom: 20px;
        writing-mode: tb-rl;
    }
`

export default function SideBar() {
    return (
        <>
            <Side title='left'>
                <StyledSideLeft>
                    <li>
                        {SocialMedia.map(({name, url}) => (
                            <a href={url} key={name}>{getLogo(name, '20px', '20px')}</a>
                        ))}
                    </li>
                </StyledSideLeft>
            </Side>
            <Side title='right'>
                <StyledSideRight>
                    <p>yuki.1184apple@gmail.com</p>
                </StyledSideRight>
            </Side>
        </>
        
    )
}
