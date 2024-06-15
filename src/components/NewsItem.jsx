import React from "react";

function NewsItem(props) {
  return (
    <div class="card" style={{maxWidth: "300px"}}>
      <img src={props.src} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
        <a href={props.url} class="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
