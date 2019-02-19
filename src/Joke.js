import React from "react";

function Joke(props) {
  console.log(props.text);
  return (
    <div>
      <input type="checkbox" />
      <h3>{props.item.text}</h3>
      <hr />
    </div>
  );
}
export default Joke;
