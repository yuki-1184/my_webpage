import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Layout from "../components/Layout";
import { useParams, Link as RouterLink } from "react-router-dom";
import FooterNav from "../components/FooterNav";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/blog/posts/${slug}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("not found");
        return res.text();
      })
      .then((text) => {
        // frontmatter をパース
        const fmMatch = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
        if (fmMatch) {
          const fm = fmMatch[1];
          const body = fmMatch[2];
          const titleMatch = fm.match(/^title:\s*["']?(.+?)["']?\s*$/m);
          const dateMatch = fm.match(/^date:\s*["']?(.+?)["']?\s*$/m);
          const tagsMatch = fm.match(/^tags:\s*\[(.+?)\]\s*$/m);
          if (titleMatch) setTitle(titleMatch[1]);
          if (dateMatch) setDate(dateMatch[1]);
          if (tagsMatch) {
            setTags(
              tagsMatch[1]
                .split(",")
                .map((t) => t.trim().replace(/^["']|["']$/g, ""))
            );
          }
          setContent(body);
        } else {
          setContent(text);
        }
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <Layout title="Blog">
        <StyledPost>
          <p className="status">読み込み中...</p>
        </StyledPost>
      </Layout>
    );
  }

  if (notFound) {
    return (
      <Layout title="Blog">
        <StyledPost>
          <p className="status">記事が見つかりませんでした。</p>
          <RouterLink to="/blog">← ブログ一覧に戻る</RouterLink>
        </StyledPost>
      </Layout>
    );
  }

  return (
    <Layout title="Blog">
      <StyledPost>
        <div className="header">
          <RouterLink to="/blog" className="back">
            ← ブログ一覧
          </RouterLink>
          <span className="date">{date}</span>
          <h1>{title}</h1>
          {tags.length > 0 && (
            <div className="tags">
              {tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <StyledMarkdown>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </StyledMarkdown>
        <FooterNav goto="/blog">ブログ一覧に戻る</FooterNav>
      </StyledPost>
    </Layout>
  );
}

const StyledPost = styled.section`
  margin: 20px auto;
  text-align: left;
  padding: 0px;
  max-width: 800px;

  @media (max-width: 1280px) {
    margin: 20px 150px;
  }

  @media (max-width: 768px) {
    margin: 20px 20px;
  }

  .status {
    color: var(--article-color);
    margin: 30px 0;
  }

  .header {
    margin-bottom: 40px;

    .back {
      font-size: 14px;
      color: var(--article-color);
      text-decoration: none;
      display: block;
      margin-bottom: 16px;

      &:hover {
        color: var(--light-skyblue);
      }
    }

    .date {
      font-size: 14px;
      color: var(--article-color);
      display: block;
      margin-bottom: 10px;
    }

    h1 {
      font-size: clamp(28px, 5vw, 48px);
      font-family: "Playfair Display", serif;
      font-weight: 600;
      color: var(--notbg);
      line-height: 1.3;
      margin-bottom: 16px;
    }

    .tags {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .tag {
      font-size: 12px;
      padding: 2px 10px;
      border-radius: 4px;
      background: var(--lang-tagbg);
      color: var(--article-color);
    }
  }
`;

const StyledMarkdown = styled.div`
  color: var(--article-color);
  line-height: 1.8;
  font-size: 16px;

  h1, h2, h3, h4, h5, h6 {
    color: var(--notbg);
    font-family: "Playfair Display", serif;
    margin: 2em 0 0.75em;
    line-height: 1.4;
  }

  h2 { font-size: 24px; }
  h3 { font-size: 20px; }

  p {
    margin-bottom: 1.2em;
  }

  a {
    color: var(--light-skyblue);
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  ul, ol {
    margin: 1em 0 1em 1.5em;
  }

  li {
    margin-bottom: 0.4em;
  }

  code {
    background: var(--lang-tagbg);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 14px;
    color: var(--notbg);
  }

  pre {
    background: var(--lang-tagbg);
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    margin-bottom: 1.2em;

    code {
      background: none;
      padding: 0;
    }
  }

  blockquote {
    border-left: 3px solid var(--light-skyblue);
    padding-left: 16px;
    margin: 1.2em 0;
    color: var(--article-color);
  }

  hr {
    border: none;
    border-top: 1px solid var(--lang-tagbg);
    margin: 2em 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.2em;

    th, td {
      border: 1px solid var(--lang-tagbg);
      padding: 8px 12px;
      text-align: left;
    }

    th {
      color: var(--notbg);
      background: var(--lang-tagbg);
    }
  }
`;
