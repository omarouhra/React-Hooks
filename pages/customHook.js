import { useEffect, useRef, useState } from "react";
import UseRandomJoke from "./useRandomJoke";

function customHook() {
  // useRef
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  // useState
  const [firstName, setFirstName] = useState("Omar");
  const [lastName, setLastName] = useState("Ouhra");

  // Custom Hook
  const joke = UseRandomJoke({ firstName, lastName });

  const generateJoke = e => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div>
      <h1>{joke}</h1>

      <form>
        <input ref={firstNameRef} placeholder='firstName' />
        <input ref={lastNameRef} placeholder='lastName' />
        <button type='submit' onClick={generateJoke}>
          {" "}
          Generate Joke
        </button>
      </form>
    </div>
  );
}

export default customHook;
