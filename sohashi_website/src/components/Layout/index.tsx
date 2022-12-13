// import { LayoutProps } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../NavBar';
import SideBar from '../SideBanner'
import { Main, BgText } from './style';
import { ScoutBar } from 'scoutbar';

// typeof LayoutProps = {
// //   children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
//   title: string
// };
type LayoutProps = {
    title: string
}

const Layout = ( props: LayoutProps ) => {
    return (
        <Main>
          <NavBar />
          <SideBar />
          <BgText title={props.title}>
            <h1 aria-hidden="true">
            {props.title === 'Home' ? 'Hello, There.' : props.title.concat('.')}
            </h1>
          </BgText>
          <ScoutBar 
            actions={({ createScoutAction }) => [
            createScoutAction({
                label: 'Get Started',
                description: 'Get started with scoutbar',
                href: '/',
            }),
            ]}
          />
        </Main>
    )
}

export default Layout;
