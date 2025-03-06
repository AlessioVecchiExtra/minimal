import { useState } from 'preact/hooks';
let countVar = 0;

export default function Greeting({ messages }) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);


  const [count, setCount] = useState(countVar);

  const handleClick = () => {
    setGreeting(randomMessage());
    countVar++;
    setCount(countVar);
  };

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <h4>Count click {count}</h4>
      <button onClick={handleClick}>
        New Greeting
      </button>
    </div>
  );
}