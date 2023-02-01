import { useState } from 'react';
import style from '../styles/Create.module.css';
import OutputArea from './OutputArea';
import Spinner from './Spinner';

export default function Create() {
  
  const [input, setInput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('Your story will appear here');
  const [description, setDescription] = useState('Description');
  const [storyBody, setStoryBody] = useState('Story');
  const [image, setImage] = useState('');
  const [storyEnd, setStoryEnd] = useState('');


  const handleInput = (e) => {
    setInput(() => e.target.value);
  };

  async function generateText() {

    setTitle('')
    setImage('')
    setDescription('')
    setStoryBody('')
    setStoryEnd('')
    setLoading(true)
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
      setImage(returnedData.data.imageUrl)
      setTitle(returnedData.data.aiOutput);
      setDescription(returnedData.data.entryOutput);
      setStoryBody(returnedData.data.storyBodyOutput);
      setStoryEnd(returnedData.data.storyEndOutput);
      setLoading(false)

      
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
            placeholder='A race story in space'
            type='text'
            onChange={handleInput}
          />
        </label>
        <button id={style.createBtn} type='submit'>
          {loading ? <Spinner /> : 'Create Story'}
          </button>
      </form>
      <OutputArea title={title} description={description} storyBody={storyBody} image={image} storyEnd={storyEnd} loading={loading}/>
    </main>
  );
}
