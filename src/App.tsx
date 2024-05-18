import React from 'react';
import { Form } from './Form/Form';
import './App.css';
import { Flex } from './components/Flex/Flex';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        eStoreLabs - React Hook Form
      </header>
      <main>
        <Flex width="100%" justifyContent="center">
          <Form />
        </Flex>

      </main>
    </div>
  );
}

export default App;
