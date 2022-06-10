import React, { useState } from "react";

const Todo = () => {
  const [input, setinput] = useState("");
  const [items, setItems] = useState([]);
  const [DoneItems, setDoneItems] = useState([]);
  const handleOnchange = (e) => {
    setinput(e.target.value);
  };
  const additem = () => {
    if (input) {
      setItems([input, ...items]);
      setinput("");
    }
  };
  const handledelete = (e) => {
    const pending = items.filter((el, i) => {
      return el !== e;
    });
    const done = items.filter((el, i) => {
      return el == e;
    });
    setDoneItems(done);
    setItems(pending);
  };
  //   console.log(items);
  return (
    <>
      <div className="container border d-flex flex-column align-items-center">
        <div className="inner-container ">
          <h2>TODO APP</h2>
        </div>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Add Items"
            value={input}
            onChange={handleOnchange}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
                  <div class="input-group-append">
                      <div className="container"> <i class="fas fa-plus border" onClick={additem}></i></div>
                    

          </div>
        </div>

        <div className="item-container">
          {items.map((e, id) => {
            return (
              <div className="container border d-flex">
                <div key={id}>{e}</div>
                <button
                  className="align-self-end"
                  onClick={() => handledelete(e)}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
        <br />
        <p>---------------</p>
        <div className="btn">
          {DoneItems.map((e, id) => {
            return (
              <div className="container border d-flex">
                <div key={id}>{e}</div>
                <button
                  className="align-self-end"
                  onClick={() => handledelete(e)}
                >
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
