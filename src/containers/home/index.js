import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, changeColor } from '../../reducer/count';
import { addList } from '../../reducer/todo';

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const color = useSelector((state) => state.counter.randomColor);
  const todoList = useSelector((state) => state.todo.list);
  let inputRef = useRef();
  const [r, g, b] = color;
  const dispatch = useDispatch();

  const changeTheColor = () => {
    const colorArr = [
      parseInt(Math.random() * 255),
      parseInt(Math.random() * 255),
      parseInt(Math.random() * 255),
    ];
    dispatch(changeColor(colorArr));
  };

  const addToDoList = () => {
    if (!inputRef.value) {
      return;
    }

    const data = {
      title: inputRef.value,
      key: new Date().toISOString(),
    };

    dispatch(addList(data));
    inputRef.value = '';
  };

  return (
    <div
      className='text-center flex flex-col items-center justify-start min-h-screen py-4'
      style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
    >
      <h1>This Is Home</h1>
      <h1>Count: {count}</h1>

      <div className='space-x-4 w-full'>
        <button
          onClick={() => dispatch(increment(2))}
          className='border-2 border-black p-2 m-4 w-20 rounded-md'
        >
          Add
        </button>
        <button
          onClick={() => dispatch(decrement(4))}
          className='border-2 border-black p-2 m-4 w-20 rounded-md'
        >
          Minus
        </button>
      </div>

      <h1>Random Background Color</h1>
      <div>
        <button
          onClick={() => changeTheColor()}
          className='border-2 border-black p-2 m-4 rounded-md'
        >
          Change Color
        </button>
      </div>

      <h1>My To-Do List</h1>
      <div className='space-x-4 w-full mt-2'>
        <input
          type='text'
          id='add-todo'
          placeholder='Add A List'
          className='border-2 border-black p-1 w-1/3 rounded-md text-center'
          ref={(el) => (inputRef = el)}
        />
        <button
          onClick={addToDoList}
          className='border-2 border-black text-black p-1 m-4 w-20 rounded-md'
        >
          Add List
        </button>
      </div>

      <div className='text-black h-80 overflow-scroll w-full flex justify-center items-start flex-wrap'>
        {todoList.length ? (
          todoList.map((item, index) => (
            <div
              key={item.key}
              className='border-black border-2 p-4 m-2 rounded-md w-1/3'
            >
              <h3>
                {index + 1}. {item.title}
              </h3>
              <p>{item.key}</p>
              <button className='border-2 border-black text-black p-1 m-4 w-20 rounded-md'>
                Delete
              </button>
            </div>
          ))
        ) : (
          <h3>Your List is currently Empty</h3>
        )}
      </div>
    </div>
  );
};

export default Home;
