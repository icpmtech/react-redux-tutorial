import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CounterComponent = () => {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
    </div>
  );
};

export default CounterComponent;