import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import FooterNav from "../components/FooterNav";
import { PUBLICATIONS } from "../constants/publications";

export default function Publications() {
  return (
    <Layout title="Publications">
      <StyledPublications>
        <h1>Publications</h1>

        <StyledSection>
          <h2>Papers</h2>
          <ul>
            {PUBLICATIONS.map((pub, index) => (
              <StyledPaperCard key={index}>
                <div className="meta">
                  <span className="year">{pub.year}</span>
                  {pub.isFirstAuthor && (
                    <span className="badge">First Author</span>
                  )}
                  <span className="presentation">{pub.presentationType}</span>
                </div>
                <h3>
                  {pub.url ? (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className="authors">{pub.authors}</p>
                <p className="venue">{pub.venue}</p>
              </StyledPaperCard>
            ))}
          </ul>
        </StyledSection>

        <FooterNav goto="/blog">Read my blog</FooterNav>
      </StyledPublications>
    </Layout>
  );
}

const StyledPublications = styled.section`
  margin: 20px auto;
  text-align: left;
  padding: 0px;
  max-width: 1000px;

  @media (max-width: 1280px) {
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
`;

const StyledSection = styled.div`
  padding: 20px 20px;
  max-width: 800px;

  h2 {
    margin: 10px 0px 20px;
    font-size: 24px;
    font-family: "Playfair Display", serif;
    color: var(--notbg);
  }

  ul {
    list-style: none;
    border-left: 2px solid var(--border-left);
    padding: 0px 5px;
    margin: 10px 10px;
  }
`;

const StyledPaperCard = styled.li`
  padding: 10px 20px 20px;
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

  .meta {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
    flex-wrap: wrap;
  }

  .year {
    font-size: 14px;
    color: var(--article-color);
    font-weight: 600;
  }

  .badge {
    font-size: 11px;
    padding: 2px 8px;
    border-radius: 4px;
    background: var(--light-skyblue);
    color: var(--bg);
    font-weight: 600;
  }

  .presentation {
    font-size: 13px;
    color: var(--article-color);
  }

  h3 {
    font-size: 17px;
    font-weight: 600;
    color: var(--notbg);
    margin-bottom: 8px;
    line-height: 1.5;

    a {
      color: var(--notbg);
      text-decoration: underline;
      text-decoration-color: var(--light-skyblue);
      text-underline-offset: 3px;

      &:hover {
        color: var(--light-skyblue);
      }
    }
  }

  .authors {
    font-size: 14px;
    color: var(--article-color);
    margin-bottom: 4px;
    line-height: 1.6;
  }

  .venue {
    font-size: 14px;
    color: var(--border-left);
    font-style: italic;
  }
`;
