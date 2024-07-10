import React, { Suspense, lazy } from 'react';
import './App.css';

const FetchData = lazy(() => import('FetchData'));

function App() {
  const handleClick = async () => {
    const [styles, fetchData] = await Promise.all([
      import('styles'),
      import('FetchData')
    ]);
    styles.default();
    fetchData.default();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, React!</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <button id="fetch-button" onClick={handleClick}>Fetch Data</button>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
