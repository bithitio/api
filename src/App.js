import React, { useEffect } from 'react';
import Route from './Route';
import { BrowserRouter } from 'react-router-dom';



function App() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <BrowserRouter>
    <div className="app-website">

      <Route />
          
    </div>
    </BrowserRouter>
  );
}

export default App;
