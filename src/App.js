 import { useState, useEffect } from 'react';

 const ELEMENTS = [
  {name: 'hydrogen', symbol: 'H', atomicNumber: '1'},
  {name: 'helium', symbol: 'He', atomicNumber: '2'}
]

function btn({ val, onBtnClick }) {
  return (
    <button className="btn" onClick={onBtnClick}>
      {val}
    </button>
  );
};

 function Element() {
  const [isSymbol, setIsSymbol] = useState(true);
  const [value, setValue] = useState(ELEMENTS[0].symbol);
  
  function handleClick(elNum) {
    var nextText = value.slice();

    if (isSymbol) {
      nextText = ELEMENTS[elNum].name;
    } else {
      nextText = ELEMENTS[elNum].symbol;
    }

    setValue(nextText);
    setIsSymbol(!isSymbol);
  };

  return (
    <button 
      className='reactive-nonmetals ${isSymbol ? "button-symbol" : "button-name"}'
      onClick={() => handleClick(0)}
    >
      {value}
    </button>
  );
 }

 export default function Kamistry() {

  function handleClick(i) {

  }

  return (
    <>
      <div className="element-row">
        <Element tableNum="0" onBtnClick={() => handleClick}/>
      </div>
    </>
  );
 }