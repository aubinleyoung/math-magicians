import React, { useState } from 'react';
import '../App.css';
import calculate from '../logic/Calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const operateEvents = (e) => {
    const btnName = e.target.innerHTML;
    const result = calculate(state, btnName);
    setState(result);
  };
  const { total, operation, next } = state;
  return (
    <section className="calculator-page">
      <div className="do-math">
        <h1>Let &apos; s do some math!</h1>
      </div>
      <div className="btn_wrapper btn">
        <div className="display">
          {total}
          {operation}
          {next}
        </div>
        <button type="button" className="ac btn" onClick={operateEvents}>AC</button>
        <button type="button" className="one btn" onClick={operateEvents}>+/-</button>
        <button type="button" className="two btn" onClick={operateEvents}>%</button>
        <button type="button" className="tree btn" onClick={operateEvents}>÷</button>
        <button type="button" className="four btn" onClick={operateEvents}>7</button>
        <button type="button" className="five btn" onClick={operateEvents}>8</button>
        <button type="button" className="six btn" onClick={operateEvents}>9</button>
        <button type="button" className="seven btn" onClick={operateEvents}>x</button>
        <button type="button" className="eigth btn" onClick={operateEvents}>4</button>
        <button type="button" className="nine btn" onClick={operateEvents}>5</button>
        <button type="button" className="ten btn" onClick={operateEvents}>6</button>
        <button type="button" className="eleven btn" onClick={operateEvents}>-</button>
        <button type="button" className="twelve btn" onClick={operateEvents}>1</button>
        <button type="button" className="thirteen btn" onClick={operateEvents}>2</button>
        <button type="button" className="fourteen btn" onClick={operateEvents}>3</button>
        <button type="button" className="fifteen btn" onClick={operateEvents}>+</button>
        <button type="button" className="seventeen btn" onClick={operateEvents}>0</button>
        <button type="button" className="eighteen btn" onClick={operateEvents}>.</button>
        <button type="button" className="nineteen btn" onClick={operateEvents}>=</button>
      </div>
    </section>

  );
};

export default Calculator;
