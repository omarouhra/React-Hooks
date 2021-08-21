import { useState, useEffect } from "react";

function Home() {
  const [name, setName] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);

  //  On every render
  useEffect(() => {
    console.log("I re-render");
  });

  // Only on the first render => componentDidMount Alternative
  useEffect(() => {
    console.log("The component Mounted");
  }, []);

  // On the first render + whenever depandacy changes! - componentDidUpdate Alternative
  useEffect(() => {
    console.log(`The name changed: ${name}`);
    // return () => {
    //   console.log("we unmouted");
    // };
  }, [name]);

  // Same rules -> componetentWillUnmount Alternative
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    console.log("listening");
  }, []);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <div>
      <p>Window width is {windowWidth}</p>
      <input
        onChange={e => {
          setName(e.target.value);
        }}
        type='text'
      />
      <br/>
      <a href="/customHook"> Custom Hook</a>
    </div>
  );
}

export default Home;
