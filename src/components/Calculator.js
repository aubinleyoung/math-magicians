import React, { useState } from 'react';
import './calculator.css';
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
    <div className="btn_wrapper btn">
      <div className="display">
        {total}
        {operation}
        {next}
      </div>
      <button type="button" className="ac btn" onClick={operateEvents}>AC</button>
      <button type="button" className="one btn" onClick={operateEvents}>+/-</button>
      <button type="button" className="two btn" onClick={operateEvents}>%</button>
      <button type="button" className="tree btn" onClick={operateEvents}>+</button>
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
  );
};

export default Calculator;
// import './calculator.css';

// const Calculator = () => (
//   <div className="btn_wrapper btn">
//     <div className="display">0</div>
//     <div className="ac btn">AC</div>
//     <div className="one btn">+/-</div>
//     <div className="two btn">%</div>
//     <div className="tree btn">+</div>
//     <div className="four btn">7</div>
//     <div className="five btn">8</div>
//     <div className="six btn">9</div>
//     <div className="seven btn">x</div>
//     <div className="eigth btn">4</div>
//     <div className="nine btn">5</div>
//     <div className="ten btn">6</div>
//     <div className="eleven btn">-</div>
//     <div className="twelve btn">1</div>
//     <div className="thirteen btn">2</div>
//     <div className="fourteen btn">3</div>
//     <div className="fifteen btn">+</div>
//     <div className="seventeen btn">0</div>
//     <div className="eighteen btn">.</div>
//     <div className="nineteen btn">=</div>
//   </div>
// );
// export default Calculator;
