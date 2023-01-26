import { useState, useEffect } from 'react';
import style from '../styles/Create.module.css';

export default function Create() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return <main className='App'>create</main>;
}
