import './App.css';
import React from 'react';
import TaskCard from './TaskCard';

const App = () => {
  return (
    <div className="app">
      <TaskCard 
        title="Todo List"
        description="Wake up"
        isDone={false}
      />
    
      <TaskCard 
        title="Todo List"
        description="Wake up"
        isDone={false}
      />
    
      {/* Add more TaskCards as needed */}
    </div>
  );
};


export default App;
