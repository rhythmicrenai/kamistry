 import { useState, useEffect } from 'react';

 const element = {
  name: 'hydrogen',
  symbol: 'H',
  atomicNumber: '1'
 }

 function Element() {
  const [isSymbol, setIsSymbol] = useState(true);
  const [value, setValue] = useState(element.symbol);
  
  function handleClick() {
    var nextText = value.slice();

    if (isSymbol) {
      nextText = element.name;
    } else {
      nextText = element.symbol;
    }

    setValue(nextText);
    setIsSymbol(!isSymbol);
  };

  return (
    <button 
      className="button-element"
      onClick={handleClick}
    >
      {value}
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