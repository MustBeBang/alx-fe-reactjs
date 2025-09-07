import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 style={{ color: 'darkblue' }}>Counter</h2>
      <p style={{ fontSize: '18px', marginBottom: '10px' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px', padding: '8px 12px' }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px', padding: '8px 12px' }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ margin: '5px', padding: '8px 12px' }}>Reset</button>
    </div>
  );
}

export default Counter;
