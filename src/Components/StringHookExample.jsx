import { useState } from "react";

export function StringHookExample() {
  const [name, setName] = useState("Guest");

  return (
    <div>
      <p>Hello, {name}</p>
      <button onClick={() => setName("User")}>Change Name</button>
    </div>
  );
}