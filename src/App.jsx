import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0)
  const count = useSelector((state) => state.counter.value);
  const dispatch  = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }
  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleResetClick() {
    dispatch(reset());
  }
  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount))
  }
  return (
  <div>
    <h1>Redux Number Counter</h1>
    <button onClick={handleIncrementClick}>+</button>
    <p>Count: <span>{count}</span></p>
    <button onClick={handleDecrementClick}>-</button>
    <div className='contain'>
    <input type='number' value={amount} placeholder='x' onChange={(e) => setAmount(e.target.value)}/>
    <button className='input' onClick={handleIncAmountClick}>Increase by Amount</button>
    </div>
    <button className='reset' onClick={handleResetClick}>Reset Count</button>

  </div>
  )
}

export default App
