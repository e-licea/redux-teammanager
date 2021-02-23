import React from 'react';
import  { createStore } from  'redux';
import { Provider } from 'react-redux';

//components

//store
const store = createStore(reducer)

import TeamName from './Components/TeamName';
import Members from './Components/Members';

export default function App() {
  return (
    <div>
      <Provider store = {store}>
        <TeamName/>
        <Members/>
      </Provider>
    </div>
  )
}
