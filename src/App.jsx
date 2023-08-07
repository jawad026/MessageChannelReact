import  { useEffect, useRef } from "react";

const ChildComponentWithIframe = () => {
  const outputRef = useRef(null);

  useEffect(() => {
    console.log("hello");
    //Here the window is waiting for a message from the parent window
    //The onMessage function is fired when a message is recieved
    window.addEventListener("message", onMessage, false);
    function onMessage(e) {
      outputRef.current.innerHTML = e.data;
      e.ports[0].postMessage("Message back from the React");
    }
    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, []);


  return (
    <div>
      <p ref={outputRef}>iFrame body</p>
    </div>
  );
};

export default ChildComponentWithIframe;
