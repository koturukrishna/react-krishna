import React, { useRef, useState } from "react";

export default function App() {
  const inptRef = useRef(15);
  const [a, setA] = useState(16);

  return (
    <div>
      <h4>Krishna koturu {a}</h4>
      <h4>{inptRef.current.value}</h4>
      <input type="number" ref={inptRef} />
      <br />
      <button onClick={() => setA(a + parseInt(inptRef.current.value))}>
        Add
      </button>
    </div>
  );
}
