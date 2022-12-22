// import { LayoutProps } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../NavBar';
import SideBar from '../SideBanner';
import PropTypes from 'prop-types';
import { Main, BgText, StyledBody } from './style';
import { ScoutBar } from 'scoutbar';
import { actions } from './scoutbar';

// typeof LayoutProps = {
// //   children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
//   title: string
// };

type LayoutProps = {
    children?: JSX.Element | JSX.Element[],
    title: string
}

const Layout = ({children, title}: LayoutProps ) => {
    return (
        <Main>
          <NavBar />
          <SideBar />
          <BgText title={title}>
            <h1 aria-hidden="true">
            {title === 'Home' ? 'Hello, There.' : title.concat('.')}
            </h1>
          </BgText>
          <ScoutBar 
            actions={actions}
          />
          {children}
        </Main>
    )
}

type PageWrapperProps = {
    children?: JSX.Element | JSX.Element[],
    className: string
}

export const PageWrapper = ({ children, className = '', ...rest }: PageWrapperProps) => {
  return (
    <section {...rest} id="main-content" tabIndex={-1}>
      <div className={`container  ${className}`}>
        <StyledBody>
          <div className="col-md-10">{children}</div>
        </StyledBody>
      </div>
    </section>
  );
};

export default Layout;
