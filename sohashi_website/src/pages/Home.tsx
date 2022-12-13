import React from 'react';
import { Box } from '@chakra-ui/react';
import  Layout from '../components/Layout'

function Home() {
    const LayoutProps = {
        title: 'Home'
    }
    return (
        <Layout {...LayoutProps}>
            Hello World!! Hi, this is satoi Ohashi
        </Layout>
    )
}

export default Home;
