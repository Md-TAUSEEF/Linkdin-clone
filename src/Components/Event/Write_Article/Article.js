import React from "react";
import "./Article.css"; // Import the CSS file for the article component

const Article = ({ title, content, author, publishedDate }) => {
  return (
    <article className="article">
      <h2 className="article-title">{title}</h2>
      <p className="article-content">{content}</p>
      <div className="article-meta">
        <span className="article-author">By {author}</span>
        <span className="article-date">Published on {publishedDate}</span>
      </div>
    </article>
  );
};

export default Article;
