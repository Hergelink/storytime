import { useState, useEffect } from 'react';

export default function Main() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <main className='App'>
            Main
    </main>
  );
}
