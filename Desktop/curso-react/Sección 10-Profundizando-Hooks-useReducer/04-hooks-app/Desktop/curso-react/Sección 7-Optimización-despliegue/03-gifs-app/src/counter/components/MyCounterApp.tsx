import { useCounter } from "../hooks/useCounter";

export const MyCounterApp = () => {

  const { counter, handleadd, handleSubtract, handleReset } = useCounter(5);


  return (<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <h1>counter:{counter}</h1>
    <div style={{ display: 'flex', gap: '10px' }}>
      <button onClick={handleadd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Retet</button>
    </div>

  </div>)
};
