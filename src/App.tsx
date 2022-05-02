import React from 'react';
import './App.css';
import { VariantOne } from './VariantOne';
import { VariantTwo } from './VariantTwo';

export type typeX = {
  startX: number
  maxX: number
}

function App() {

  return (
    <div className="root">
      <h3>Counter 1: </h3>
      <VariantOne />
      <h3>Counter 2: </h3>
      <VariantTwo />
    </div>
  );
}

export default App;



