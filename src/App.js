import React, { useState } from "react";
import { Button, IconButton, TextField } from "@material-ui/core";
import UncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import ClearIcon from "@material-ui/icons/ClearOutlined";
import MyModal from "./Modal";
import CTAWithModal from "./CTAWithModal";

const ToDoTask = ({ index, todo, toggle, delTodo }) => {
  return (
    <li className="flex align-items-stretch">
      <IconButton classes={{ root: "p-1" }} onClick={() => toggle(index)}>
        {todo.complete ? <CheckedIcon /> : <UncheckedIcon />}
      </IconButton>
      <p
        className={
          todo.complete
            ? "pl-2 line-through text-gray-600 self-center"
            : "pl-2 self-center"
        }
      >
        {todo.task}
      </p>
      <IconButton
        classes={{ root: "justify-self-end" }}
        onClick={() => delTodo(index)}
      >
        <ClearIcon classes={{ root: "fill-current text-red-500" }} />
      </IconButton>
    </li>
  );
};

const renderTodoList = ({ list, toggle, delTodo, currentFilter }) => {
  switch (currentFilter) {
    case "completed":
      list.map((todo, index) => {
        return (
          <ToDoTask
            index={index}
            todo={todo}
            toggle={toggle}
            delTodo={delTodo}
          />
        );
      });
      break;
    case "active":
      list
        .filter((todo) => !todo.completed)
        .map((todo, index) => {
          return (
            <ToDoTask
              index={index}
              todo={todo}
              toggle={toggle}
              delTodo={delTodo}
            />
          );
        });
      break;
    default:
      list.map((todo, index) => {
        return (
          <ToDoTask
            index={index}
            todo={todo}
            toggle={toggle}
            delTodo={delTodo}
          />
        );
      });
      break;
  }
};

const ToDoList = ({ list, toggle, delTodo }) => {
  const [currentFilter, setFilter] = useState("all");
  return (
    <section className="pt-10 text-center">
      <div className="bg-white w-2/3 mx-auto shadow rounded">
        <header className="text-2xl py-5">Todo List</header>
        <Button
          color="secondary"
          variant={currentFilter === "all" ? "contained" : "outlined"}
          disableElevation
          classes={{ root: "normal-case" }}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          color="secondary"
          variant={currentFilter === "active" ? "contained" : "outlined"}
          disableElevation
          classes={{ root: "ml-2 normal-case" }}
          onClick={() => setFilter("active")}
        >
          Active
        </Button>
        <Button
          color="secondary"
          variant={currentFilter === "completed" ? "contained" : "outlined"}
          disableElevation
          classes={{ root: "ml-2 normal-case" }}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>

        <ul className="p-5">
          {currentFilter === "completed"
            ? list
                .filter((todo) => todo.complete)
                .map((todo, index) => {
                  return (
                    <ToDoTask
                      index={index}
                      todo={todo}
                      toggle={toggle}
                      delTodo={delTodo}
                    />
                  );
                })
            : currentFilter === "active"
            ? list
                .filter((todo) => !todo.complete)
                .map((todo, index) => {
                  return (
                    <ToDoTask
                      index={index}
                      todo={todo}
                      toggle={toggle}
                      delTodo={delTodo}
                    />
                  );
                })
            : list.map((todo, index) => {
                return (
                  <ToDoTask
                    index={index}
                    todo={todo}
                    toggle={toggle}
                    delTodo={delTodo}
                  />
                );
              })}
          {() => renderTodoList({ list, toggle, delTodo, currentFilter })}
        </ul>
      </div>
    </section>
  );
};

const App = () => {
  let ToDo = [
    { task: "Todo 1", complete: false },
    { task: "Todo 2", complete: true }
  ];
  const [todoList, setTodoList] = useState(ToDo);

  const addTask = (input) => {
    let duplicate = [...todoList];
    duplicate = [
      ...duplicate,
      { id: todoList.length, task: input, complete: false }
    ];
    setTodoList(duplicate);
  };
  const toggle = (id) => {
    let duplicate = [...todoList];
    duplicate[id].complete = !duplicate[id].complete;
    setTodoList(duplicate);
  };
  const delTodo = (id) => {
    let newTodo = [...todoList];
    newTodo.splice(id, 1);
    setTodoList(newTodo);
  };

  const [input, setInput] = useState("");
  const handleChange = (i) => {
    setInput(i.currentTarget.value);
  };
  const submit = (i) => {
    i.preventDefault();
    addTask(input);
    setInput("");
  };
  return (
    <main className="bg-gray-400 min-h-screen">
      <section className="pt-10">
        <form className="bg-white w-2/3 mx-auto shadow p-5 text-center rounded">
          <header className="text-2xl mx-5">Todo Form</header>

          <TextField
            fullWidth //
            id="add-todo-input"
            label="Add Todo"
            value={input}
            onChange={handleChange}
          />

          <Button
            fullWidth
            color="primary"
            variant="contained"
            disableElevation
            classes={{ root: "mt-4 normal-case" }}
            onClick={submit}
          >
            Submit
          </Button>
        </form>
      </section>

      <ToDoList list={todoList} toggle={toggle} delTodo={delTodo} />

      <section className="w-2/3 mx-auto pt-10">
        {/** PLEASE DO NOT DELETE THIS */}
        {/* <MyModal /> */}
        {/* <CTAWithModal
          ctaComponent={
            <Button
              color="primary"
              variant="contained"
              fullWidth
              disableElevation
              classes={{ root: "mt-4 normal-case" }}
            >
              Open Modal
            </Button>
          }
          modalContent={({ handleCloseModal }) => (
            <>
              <header className="font-bold text-4xl">Modal Content</header>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium et optio corrupti ipsam, velit illum? Placeat sed
                accusantium libero eos ad atque praesentium. Nisi sunt,
                necessitatibus commodi explicabo odio incidunt!
              </p>

              <Button
                color="primary"
                variant="contained"
                fullWidth
                disableElevation
                classes={{ root: "mt-4 normal-case" }}
                onClick={handleCloseModal}
              >
                Close Modal
              </Button>
            </>
          )}
        /> */}
      </section>
    </main>
  );
};

export default App;
