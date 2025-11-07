import React from "react";
import styled from "styled-components";

type ExperienceCardProps = {
  title: string;
  type: string;
  date: string;
  location: string;
  description: string;
  blog?: string;
  url: string;
  technologies: string[];
};

const ExperienceCard = (props: ExperienceCardProps) => {
  return (
    <StyledExperienceCard>
      <StyledContent>
        <StyledTitle>
          <h3>
            <strong>{props.type}</strong>
          </h3>
          <span>
            <strong>
              @
              <a href={props.url} target="_blank" rel="noopener noreferrer">
                {props.title}
              </a>
            </strong>
          </span>
        </StyledTitle>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            color: "var(--article-color)",
            fontWeight: 500,
            textAlign: "right",
          }}
        >
          <span>{props.location}</span>
          <span aria-hidden="true">•</span>
          <span>{props.date}</span>
        </div>
        <p>
          {props.blog ? (
            <a
              href={props.blog}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--light-skyblue)",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              Read Tech Blog →
            </a>
          ) : null}
        </p>
        <p>{props.description}</p>
        <p>
          {props.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </p>
      </StyledContent>
    </StyledExperienceCard>
  );
};

const StyledExperienceCard = styled("li")`
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  margin-bottom: 30px;
  position: relative;
  transition: 0.5s;

  &:before {
    position: absolute;
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 999px;
    border: 3px solid var(--light-skyblue);
    background: var(--bg);
    left: -13px;
    top: 16px;
    transition: 0.5s;
  }

  &:hover:before {
    background-color: var(--border-left);
  }
`;

const StyledContent = styled("div")`
  color: var(--notbg);

  p {
    padding: 5px 0px 5px 0px;
    font-size: 15px;
    color: var(--article-color);

    span {
      margin-right: 12px;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 14px;
      background-color: rgba(186, 186, 186, 0.33);
      color: var(--article-color);

      @media (max-width: 768px) {
        margin-bottom: 12px;
        display: inline-block;
      }
    }
  }
`;

const StyledTitle = styled("div")`
  display: flex;
  color: var(--notbg);

  span {
    margin: 0px 20px;

    a {
      margin: 0px 2px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 768px) {
    display: block;

    span {
      margin: 0;
    }
  }
`;

export default ExperienceCard;
