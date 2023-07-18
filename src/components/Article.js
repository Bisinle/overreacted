import React from "react";
import CoffeeBentoBox from "./CoffeeBentoBox";

function Article({ title, preview, minutes, date = "January 1, 1970" }) {
//   console.log(title, preview, minutes, date);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <span> .<CoffeeBentoBox minutes={minutes}/> min read</span>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
