import React from 'react';
import { ProductForm } from './Form/ProductForm';
import './App.css';
import { Flex } from './components/Flex/Flex';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        eStoreLabs - React Hook Form
      </header>
      <main>
        <Flex width="100%" justifycontent="center">
          <ProductForm />
        </Flex>

      </main>
    </div>
  );
}

export default App;
