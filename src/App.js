import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [firstColumn, setFirstColumn] = useState([1, 2, 3]);
  const [firstColumnPlaceholder, setFirstColumnPlaceholder] = useState([]);
  const [secondColumn, setSecondColumn] = useState([]);
  const [thirdColumn, setThirdColumn] = useState([]);

  const handleFirstPlaceholder = (firstColumn) => {
    if (firstColumnPlaceholder.length === 0) {
      if (firstColumn) {
        setFirstColumnPlaceholder(firstColumn[0]);
        firstColumn.shift();
      }
    } else {
      console.log("hello");
    }
  };
  const deleteFirstPlaceholder = () => {
    setFirstColumnPlaceholder([]);
  };

  return (
    <div className='App'>
      <div className='content'>
        <div className='content-holder'>
          <div
            className='firstColumnPlaceholder'
            onClick={() => deleteFirstPlaceholder(firstColumnPlaceholder)}
          >
            {firstColumnPlaceholder}
          </div>
          <div
            onClick={() => handleFirstPlaceholder(firstColumn)}
            className='singleColumn'
          >
            {firstColumn.map((value) => (
              <div className={`column${value}`} key={value}>
                {value}
              </div>
            ))}
          </div>
        </div>
        <div className='singleColumn'>
          {secondColumn.map((value) => (
            <div key={value}>{value}</div>
          ))}
        </div>
        <div className='singleColumn'>
          {thirdColumn.map((value) => (
            <div key={value}>{value}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
