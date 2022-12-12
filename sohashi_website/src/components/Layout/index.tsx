// import { LayoutProps } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../NavBar';
import { BackLay, Main } from './style';

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
            <BackLay title={props.title}>
              <h1 aria-hidden="true">
              {props.title === 'Home' ? 'Hello, There.' : props.title.concat('.')}
              </h1>
            </BackLay>
        </Main>
        
    )
}

export default Layout;
