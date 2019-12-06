import React from 'react';
import FeedbackList from './components/FeedbackList';

import './App.css';

function App() {
  return (
    <div>
      <FeedbackList msg="my custom message" version="2" />
    </div>
  );
}

export default App;
