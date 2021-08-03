import "./App.css";
import { Fragment, useEffect, useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState(null);

  useEffect(() => {
    // do something on load
    console.log("Hey, I've loaded up!");

    // return () => {
    //   // this fires on unload
    // };
    if (!todoItems) {
      fetch("http://localhost:8080/api/todoItems")
        .then((response) => response.json())
        .then((data) => {
          console.log("Todo items list: ", data);
          setTodoItems(data);
        });
    }
  }, [todoItems]);

  return (
    <div>
      {todoItems ? 
        todoItems.map((item) => {
           return (
            <Fragment key={item.id}>
              <input type="checkbox" checked={item.isDone} />
              <span>{item.task}</span>
            </Fragment>
          );
        })
       : (
        <>No tasks</>
      )}
    </div>
  );
}

export default App;
