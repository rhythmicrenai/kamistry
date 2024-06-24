 import { useState, useEffect } from 'react';

 const element = {
  name: 'hydrogen',
  symbol: 'H',
  atomicNumber: '1'
 }

 function Element() {
  const [thing, setThing] = useState(element.symbol);

  function Toggle(thing) {
    if (thing = element.symbol) {
       return setThing(element.name);
    } else {
      return setThing(element.name);
    }
  }
  
  return (
    <button 
      className="element-button"
      onClick={() => Toggle(thing)}
    >
      {thing}
    </button>
  );
 }

 export default function Kamistry() {
  return (
    <>
      <div className="element-row">
        <Element />
      </div>
    </>
  );
 }