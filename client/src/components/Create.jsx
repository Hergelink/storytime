import { useState, useEffect } from 'react';
import style from '../styles/Create.module.css';

export default function Create() {
  const [data, setData] = useState('generated text will apear here');
  const [input, setInput] = useState(null);

  const handleInput = (e) => {
    setInput(() => e.target.value);
  };

  async function generateText(input) {
    try {
      const response = await fetch('/openai/generatetext', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input,
        }),
      });
      console.log(input);
      if (!response.ok) {
        throw new Error('prompt could not be generated');
      }

      const returnedData = await response.json();
      setData(returnedData.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    generateText(input);
  };

  return (
    <main className='App'>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='random question'
          type='text'
          onChange={handleInput}
        />
        <button type='submit'>submit</button>
      </form>
      <span id='output'>{data}</span>
    </main>
  );
}
