/* eslint-disable react/prop-types */
import listenerMessageChannel from "message-channel/listener";

const Sender = () => {
    // Post the message to the receiver component
    const handleMessage = (e, reply) => reply(e.data + " world");

    listenerMessageChannel("scope-name", handleMessage);


  return (
    <div>
      <h2>Sender Component</h2>
      <button >Send Message</button>
    </div>
  );
};

export default Sender;
