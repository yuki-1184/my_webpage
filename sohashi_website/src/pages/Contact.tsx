import { filterProps } from 'framer-motion';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react';

import Layout from '../components/Layout';
import FooterNav from '../components/FooterNav';

const Contact = () => {
  const [submitted, setSubmitted] = useState('initial')

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    
    const data = new FormData(event.target as HTMLFormElement);
    fetch("https://formspree.io/f/mayzwepg", {
      method: 'POST',
      body: data,
      headers: {
          'Accept': 'application/json'
    }}).then(response => {
      if (response.ok) {
        setSubmitted('success')
      } else {
        setSubmitted('error')
      }
    })
  }

  return (
    <Layout title='Contact'>
      <StyledContact>
        <h1>Contact</h1>
        <form onSubmit={handleSubmit} method="POST">
          <StyledFormItem>
            <input type='text' placeholder='*Full Name' name="name"></input>
          </StyledFormItem>
          <StyledFormItem>
            <input type='email' placeholder='*Email Address' name="email"></input>
          </StyledFormItem>
          <StyledFormItem>
            <textarea placeholder='*Message' name="message"></textarea>
          </StyledFormItem>
          <StyledFormItem>
            <StyledButton type='submit' className='contact-button'>Send</StyledButton>
            {submitted === 'success' && <p>Thank you</p>}
            {submitted === 'error' && <p>An error occured</p>}
          </StyledFormItem>
        </form>
        <div>
          <FooterNav goto='/home'>Go Back Home</FooterNav>
        </div>
      </StyledContact>
    </Layout>
  )
}

const StyledContact = styled('section')`
  margin: 20px auto;
  min-height: 70vh;
  text-align: left;
  padding: 0;
  max-width: 1000px;

  @media (max-width: 1250px) {
      margin: 20px 150px;
  }

  @media (max-width: 768px) {
      margin: 20px 20px;
  }

  h1 {
    margin: 0px 10px;
    font-size: clamp(40px, 8vw, 80px);
    font-family: 'Playfair Display', serif;
    font-weight: 500;
  }

  link {
    margin: 10px 0px;
  }
`

const StyledFormItem = styled('div')`
  margin: 10px 10px;

  input {
    border: solid;
    padding-left: 15px;
    width: 80%;
    max-width: 600px;
    height: 65px;
    border: solid;
    border-radius: 20px;
  }

  textarea {
    padding: 15px;
    width: 80%;
    max-width: 600px;
    height: 240px;
    border: solid;
    border-radius: 20px;
  }

  /* p {
    margin
  } */
`

const StyledButton = styled.button`
  margin: 20px 0px;
  width: 150px;
  background: black;
  color: white;
  padding: 9px 16px;
  border-radius: 10px;
  border: 1px solid black;
  transition-property: background, color;
  transition-duration: 200ms;

  &:hover {
    color: black;
    background: white;
  }
`

export default Contact;
