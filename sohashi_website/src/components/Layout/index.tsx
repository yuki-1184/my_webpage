// import { LayoutProps } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar';
import SideBar from '../SideBanner';
import { Main, BgText, StyledBody } from './style';
import { ScoutBar } from 'scoutbar';
import { actions } from './scoutbar';
import GlobalStyle from '../../styles/GlobalStyle';

const LOCAL_STORAGE_KEY = "ThemeColor"

type LayoutProps = {
    children?: JSX.Element | JSX.Element[],
    title: string
}

const Layout = ({children, title}: LayoutProps ) => {
    const [theme, setTheme ] = useState("");

    useEffect(() => {
      const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }, [])

    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, theme)
    }, [theme])

    const toggleTheme = () => {
      if (theme === 'light' || theme === '') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }

    return (
      <Main>
        <GlobalStyle theme={theme}/>
        <NavBar theme={theme} toggleTheme={toggleTheme}/>
        <SideBar theme={theme} />
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
