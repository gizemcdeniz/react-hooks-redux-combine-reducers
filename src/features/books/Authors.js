import React from "react";
import { useSelector } from "react-redux";

function Authors() {
  const authors = useSelector((state) => state.authors);
;
console.log(authors,"autooooooo");
  return (
    <div>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>{author.authorName}</li>
        ))}
      </ul>
    </div>
  );
}

export default Authors;
