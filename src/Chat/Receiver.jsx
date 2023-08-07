/* eslint-disable react/prop-types */
import  { useEffect } from "react";
import connectMessageChannel from 'message-channel/connect';
const Receiver = async() => {
    const send = await connectMessageChannel('scope-name');
 

    send('hello')
  .then(e => console.log(e.data));

  return (
    <div>
      <h2>Receiver Component</h2>
      <p>Check the console for received messages.</p>
    </div>
  );
};

export default Receiver;
