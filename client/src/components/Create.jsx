import { useState, useEffect } from 'react';
import style from '../styles/Create.module.css';
import OutputArea from './OutputArea';

export default function Create() {
  const [data, setData] = useState('Your story will appear here');
  const [input, setInput] = useState(null);

  const handleInput = (e) => {
    setInput(() => e.target.value);
  };

  async function generateText() {
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
        <label id={style.createLabel}>
          What kind of story do you want?
          <input
            id={style.createInput}
            placeholder='random question'
            type='text'
            onChange={handleInput}
          />
        </label>
        <button id={style.createBtn} type='submit'>Create Story</button>
      </form>
      <OutputArea data={data} />
    </main>
  );
}
