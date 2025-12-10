import * as React from 'react';
import './App.css';
import ScreenList from './components/ScreenList';
import AddForm from './components/AddForm';
import { SendTaskContext } from './contexts/SendTaskContext';
import { v4 as uuid4 } from 'uuid';
import { useState } from 'react';

const defaultTask = [
    {
        id : uuid4(),
        title : 'Task one',
        details : 'This is task one',
        complete : false 
    },
    {
        id : uuid4(),
        title : 'Task Two',
        details : 'This is task two',
        complete : false 
    },
    {
        id : uuid4(),
        title : 'Task Three',
        complete : false 
    },
    ]

function App() {
      const [sendTask , setSendTask] = useState(defaultTask);
  return (
    <>
    <SendTaskContext.Provider value={{sendTask , setSendTask}}>
      <ScreenList />
    </SendTaskContext.Provider>
    </>
  )
}

export default App
