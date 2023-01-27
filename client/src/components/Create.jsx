import { useState, useEffect } from 'react';
import style from '../styles/Create.module.css';
import OutputArea from './OutputArea';

export default function Create() {
  
  const [input, setInput] = useState(null);
  const [title, setTitle] = useState('Your story will appear here');
  const [description, setDescription] = useState('Description');
  const [story, setStory] = useState('Story');
  const [image, setImage] = useState('');


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
      
      if (!response.ok) {
        throw new Error('prompt could not be generated');
      }

      const returnedData = await response.json();
      setTitle(returnedData.data.aiOutput);
      setDescription(returnedData.data.entryOutput);
      setStory(returnedData.data.storyOutput);
      setImage(returnedData.data.imageUrl)
      
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
      <OutputArea title={title} description={description} story={story} image={image}/>
    </main>
  );
}
