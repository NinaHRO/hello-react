import { useState } from "react";
 
function App() {
  // React state: count and a function to update it
  const [count, setCount] = useState(0);
 
  // JSX returned to the page
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Hello React!</h1>
      <p>Welcome to my first React app created with Vite.</p>
 
      <button
        onClick={() => setCount(count + 1)}
        style={{
          fontSize: "1rem",
          padding: "0.6rem 1rem",
          borderRadius: "0.5rem",
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      >
        You clicked me {count} times
      </button>
    </div>
  );
}
 
export default App;
 