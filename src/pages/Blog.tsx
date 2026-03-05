import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Link as RouterLink } from "react-router-dom";

type PostMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
};

export default function Blog() {
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/blog/index.json`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Layout title="Blog">
      <StyledBlog>
        <h1>Blog</h1>
        {loading ? (
          <p className="status">読み込み中...</p>
        ) : posts.length === 0 ? (
          <p className="status">まだ投稿がありません。</p>
        ) : (
          <ul>
            {posts.map((post) => (
              <StyledPostCard key={post.slug}>
                <span className="date">{post.date}</span>
                <h2>
                  <RouterLink to={`/blog/${post.slug}`}>
                    {post.title}
                  </RouterLink>
                </h2>
                {post.description && (
                  <p className="description">{post.description}</p>
                )}
                {post.tags.length > 0 && (
                  <div className="tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </StyledPostCard>
            ))}
          </ul>
        )}
      </StyledBlog>
    </Layout>
  );
}

const StyledBlog = styled.section`
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

  .status {
    margin: 30px 20px;
    color: var(--article-color);
  }

  ul {
    list-style: none;
    border-left: 2px solid var(--border-left);
    padding: 0px 5px;
    margin: 30px 20px;
  }
`;

const StyledPostCard = styled.li`
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

  .date {
    font-size: 13px;
    color: var(--article-color);
    display: block;
    margin-bottom: 6px;
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;

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

  .description {
    font-size: 14px;
    color: var(--article-color);
    margin-bottom: 10px;
    line-height: 1.6;
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
`;
