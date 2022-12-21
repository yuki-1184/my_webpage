import React from 'react';
import styled from 'styled-components';

type ExperienceCardProps = {
    title: string;
    type: string;
    date: string;
    location: string;
    description: string;
    url: string;
    technologies: string[];
}

const ExperienceCard = (props: ExperienceCardProps) => {
    return (
      <StyledExperienceCard>
        <div className='content'>
          <div className='title'>
            <h3>{props.type}</h3>
            <span>
              @
              <a href={props.url} target='_blank' rel="noopener noreferrer">{props.title}</a>
            </span> 
          </div>
          <h3>{props.date}</h3>
          <p>{props.description}</p>
          <p>
            {props.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
            ))}
          </p>
        </div>
      </StyledExperienceCard>
    )
}

const StyledExperienceCard = styled('li')`
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  margin-bottom: 30px;
  position: relative;
  cursor: pointer;
  transition: .5s;

  &:before {
    position: absolute;
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 999px;
    border: 3px solid #34ace0;
    background: #fff;
    left: -13px;
    top: 16px;
    transition: .5s;
  }


  &:hover:before {
    background-color:#0F0;
  }

  div {

    p {
      padding: 5px 0px 5px 0px;
      font-size: 15px;

      span {
        margin-right: 12px;
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 14px;
        background-color: rgba(186, 186, 186, 0.33);

        @media (max-width: 768px) {
            margin-bottom: 12px;
            display: inline-block;
        }
      }
    }
  }

  .title {
    display: flex;

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
  }
`

export default ExperienceCard;