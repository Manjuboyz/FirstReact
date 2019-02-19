import React from "react";
import ToDo from "../ToDo";
import Joke from "../src/Joke";
import todosData from "../todosData";

function MyApp() {
  const todo = todosData.map(item => <Joke key={item.id} item={item} />);
  return <div>{todo}</div>;
}

export default MyApp;

// <div>
//   <Joke question="Hey!" punchLine="Wassup" />
//   <Joke question="Nothing much!" punchLine="Great" />
//   <Joke question="What you did last night" punchLine="Watched movie" />
//   <Joke question="Nice, see you later" punchLine="Bye" />
// </div>
