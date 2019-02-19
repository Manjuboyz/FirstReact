import React from "react";

function Joke(props) {
  return (
    <div>
      <input type="checkbox" />
      <h3>{props.text}</h3>
      <hr />
    </div>
  );
}
export default Joke;
