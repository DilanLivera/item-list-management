import React from 'react';
import ItemListApp from '../ItemListApp/ItemListApp';

const priority = { Low : "Low", Medium : "Medium", High : "High" };
Object.freeze(priority);

const itemList = 
[
  { id : 1, description : "Eat breakfast", priority : priority.Medium, crossedOff: false },
  { id : 2, description : "Do some work", priority : priority.High, crossedOff: false },
  { id : 3, description : "Eat lunch", priority : priority.Low, crossedOff: true },
];

// TODO : Add a GitHub action
// TODO : Add a total count to title to capture total number of todos under each priority
// BUG : findDOMNode is deprecated in StrictMode. Find a solution to get rid of this warning

function App() {
  return (
    <div className="App">
      <ItemListApp itemList={itemList}/>
    </div>
  );
}

export default App;
