import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="input-container">
      <label for="firstname">First Name:</label>
      <input type="text" id="firstname" name="firstname" required />
      <br />

      <label for="lastname">Last Name:</label>
      <input type="text" id="lastname" name="lastname" required />
      <br />

      <label for="phone">Phone Number:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{10}"
        placeholder="1234567890"
        required
      />
      <br />

      <label for="hobby">Hobby:</label>
      <input type="text" id="hobby" name="hobby" required />
      <br />

      <label for="school">School:</label>
      <input type="text" id="school" name="school" required />
      <br />

      <label for="age">Age:</label>
      <input type="number" id="age" name="age" min="1" max="100" required />
      <br />

      <button type="submit">Submit</button>
    </div>
  );
}

export default App;
