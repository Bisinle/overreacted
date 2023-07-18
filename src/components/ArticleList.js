import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  console.log(posts);
  const post = posts.map((post) => (
    <article key={post}>
      <Article
        title={post.title}
        preview={post.preview}
        minutes={post.minutes}
        date={post.date}
      />
    </article>
  ));
  return <main>{post}</main>;
}

export default ArticleList;
