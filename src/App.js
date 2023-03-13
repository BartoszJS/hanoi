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
      let arr = [firstColumnPlaceholder];
      let fullArr = [];
      console.log(firstColumn[0]);
      if (firstColumnPlaceholder > firstColumn[0]) {
        alert("Nie możesz położyć większego na mniejszy");
      } else {
        setFirstColumn(fullArr.concat(arr, firstColumn));
        setFirstColumnPlaceholder([]);
      }
    }
  };

  const handleSecondPlaceholder = (secondColumn) => {
    if (firstColumnPlaceholder.length === 0) {
      if (secondColumn) {
        setFirstColumnPlaceholder(secondColumn[0]);
        secondColumn.shift();
      }
    } else {
      let arr = [firstColumnPlaceholder];
      let fullArr = [];

      if (firstColumnPlaceholder > secondColumn[0]) {
        alert("Nie możesz położyć większego na mniejszy");
      } else {
        setSecondColumn(fullArr.concat(arr, secondColumn));
        setFirstColumnPlaceholder([]);
      }
    }
  };
  const handleThirdPlaceholder = (thirdColumn) => {
    if (firstColumnPlaceholder.length === 0) {
      if (thirdColumn) {
        setFirstColumnPlaceholder(thirdColumn[0]);
        thirdColumn.shift();
      }
    } else {
      let arr = [firstColumnPlaceholder];
      let fullArr = [];

      if (firstColumnPlaceholder > thirdColumn[0]) {
        alert("Nie możesz położyć większego na mniejszy");
      } else {
        setThirdColumn(fullArr.concat(arr, thirdColumn));
        setFirstColumnPlaceholder([]);
      }
    }
  };

  return (
    <div className='App'>
      <div className='firstColumnPlaceholder flex h-[40px] justify-center items-center'>
        {firstColumnPlaceholder == 1 && (
          <div className='bg-blue-600 w-[20px]'>{firstColumnPlaceholder}</div>
        )}
        {firstColumnPlaceholder == 2 && (
          <div className='bg-yellow-400 w-[30px]'>{firstColumnPlaceholder}</div>
        )}
        {firstColumnPlaceholder == 3 && (
          <div className='bg-green-700 w-[40px]'>{firstColumnPlaceholder}</div>
        )}
      </div>
      <div className='content'>
        <div className='content-holder'>
          <div
            onClick={() => handleFirstPlaceholder(firstColumn)}
            className='singleColumn cursor-pointer'
          >
            {firstColumn.map((value) => (
              <div className={` column${value}`} key={value}>
                {value}
              </div>
            ))}
          </div>
        </div>
        <div className='content-holder'>
          <div
            onClick={() => handleSecondPlaceholder(secondColumn)}
            className='singleColumn cursor-pointer'
          >
            {secondColumn.map((value) => (
              <div className={`column${value}`} key={value}>
                {value}
              </div>
            ))}
          </div>
        </div>
        <div className='content-holder'>
          <div
            onClick={() => handleThirdPlaceholder(thirdColumn)}
            className='singleColumn cursor-pointer'
          >
            {thirdColumn.map((value) => (
              <div className={`column${value}`} key={value}>
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <div className='width-[200px] height-[300px] border border-red-400'>
          da
        </div>
        <div className='width-[200px] height-[300px]'>ds </div>
        <div className='width-[200px] height-[300px]'>sd </div>
      </div>
    </div>
  );
}

export default App;
