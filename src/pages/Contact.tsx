import React, { useState } from "react";
import styled from "styled-components";

import Layout from "../components/Layout";
import FooterNav from "../components/FooterNav";
import { ReactComponent as Checkmark } from "../Images/checkmarkLogo.svg";

const Contact = () => {
  const [submitted, setSubmitted] = useState("initial");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log("handleSubmit");

    if (submitted === "success") {
      setSubmitted("initial");
    } else {
      const data = new FormData(event.target as HTMLFormElement);
      fetch("https://formspree.io/f/mayzwepg", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      }).then((response) => {
        if (response.ok) {
          setSubmitted("success");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setSubmitted("error");
        }
      });
    }
  };

  return (
    <Layout title="Contact">
      <StyledContact>
        <h1>Contact</h1>
        <h2>
          {submitted === "error"
            ? "Something went wrong, please resend the message."
            : null}
        </h2>
        <form onSubmit={handleSubmit} method="POST">
          <StyledFormItem>
            <input
              type="text"
              placeholder="*Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </StyledFormItem>
          <StyledFormItem>
            <input
              type="email"
              placeholder="*Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </StyledFormItem>
          <StyledFormItem>
            <textarea
              placeholder="*Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </StyledFormItem>
          <StyledFormItem>
            <StyledButton>
              <button
                type="submit"
                className={submitted === "success" ? "active" : ""}
              >
                <p>{submitted === "success" ? "Thanks" : "Send"}</p>
                <div className="checked">
                  <Checkmark />
                </div>
              </button>
            </StyledButton>
          </StyledFormItem>
        </form>
        <div>
          <FooterNav goto="/">Go Back Home</FooterNav>
        </div>
      </StyledContact>
    </Layout>
  );
};

const StyledContact = styled("section")`
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
    font-family: "Playfair Display", serif;
    font-weight: 500;
    color: var(--notbg);
    transition: 0.3s ease-in-out;
  }

  h2 {
    margin: 0px 10px;
    color: var(--red-warn);
  }

  link {
    margin: 10px 0px;
  }
`;

const StyledFormItem = styled("div")`
  margin: 10px 10px;
  color: var(--notbg);

  input {
    border: solid;
    padding-left: 15px;
    width: 80%;
    max-width: 550px;
    height: 65px;
    border: 1px solid var(--notbg);
    border-radius: 15px;
    background-color: transparent;

    ::placeholder {
      color: var(--placeholder-color);
      opacity: 0.4;
    }

    @media (max-width: 450px) {
      width: 100%;
    }
  }

  textarea {
    padding: 15px;
    width: 80%;
    max-width: 550px;
    height: 240px;
    border: 1px solid var(--notbg);
    border-radius: 15px;
    background-color: transparent;

    ::placeholder {
      color: var(--placeholeder-color);
      opacity: 0.3;
    }

    @media (max-width: 450px) {
      width: 100%;
    }
  }
`;

const StyledButton = styled("div")`
  button {
    position: relative;
    margin: 20px 0px;
    width: 200px;
    height: 50px;
    border: 0;
    outline: none;
    background: var(--notbg);
    color: var(--bg);
    font-size: 20px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 6px 20px -5px var(--box-shadow);
    overflow: hidden;
  }

  .checked {
    width: 50px;
    height: 50px;
    border-radius: 40px;
    box-shadow: 0 0 12px -2px var(--box-shadow);
    position: absolute;
    top: 0;
    right: -40px;
    opacity: 0;
    background: var(--light-seagreen);
  }

  .checked svg {
    width: 40px;
    margin: 5px;
  }

  .checked path {
    stroke-width: 3;
    stroke: #fff;
    stroke-dasharray: 34;
    stroke-dashoffset: 34;
    stroke-linecap: round;
  }

  .active {
    background: var(--light-seagreen);
    border-radius: 40px;
    transition: 1s;
  }

  .active p {
    transition: 1s;
    margin-right: 100px;
  }

  .active .checked {
    opacity: 1;
    transition: 1s;
    right: 0;
  }

  .active .checked path {
    transition: 1s;
    transition-delay: 1s;
    stroke-dashoffset: 0;
  }
`;

export default Contact;
