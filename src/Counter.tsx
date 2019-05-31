import * as React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="counter">
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default Counter;
