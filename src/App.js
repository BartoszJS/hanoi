import logo from "./logo.svg";
import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  const [initialState, setInitialState] = useState([1, 2, 3, 4, 5]);
  const [firstColumn, setFirstColumn] = useState(initialState);
  const [firstColumnPlaceholder, setFirstColumnPlaceholder] = useState([]);
  const [secondColumn, setSecondColumn] = useState([]);
  const [thirdColumn, setThirdColumn] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [record, setRecord] = useState(9999999);
  const [showQuantity, setShowQuantity] = useState(false);

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  };
  const handleStopFinish = () => {
    if (formatTime(time) < formatTime(record)) {
      setRecord(formatTime(time));
    }
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    setFirstColumn(initialState);
    console.log(initialState);
  }, [initialState]);

  const handleReset = () => {
    setFirstColumn(initialState);
    setFirstColumnPlaceholder([]);
    setThirdColumn([]);
    setSecondColumn([]);
    setTime(0);
    handleStop();
  };
  const handleResetFinish = () => {
    setTime(0);
    handleStopFinish();
    setFirstColumnPlaceholder([]);
    setFirstColumn(initialState);
    setThirdColumn([]);
    setSecondColumn([]);
  };

  useEffect(() => {
    if (thirdColumn.length === initialState.length) {
      handleStop();
      setShowModal(true);
    }
  }, [thirdColumn]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const centiseconds = time % 100;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${centiseconds.toString().padStart(2, "0")}`;
  };
  const handleFirstPlaceholder = (firstColumn) => {
    if (firstColumnPlaceholder.length === 0) {
      if (firstColumn.length !== 0) {
        setFirstColumnPlaceholder(firstColumn[0]);
        setFirstColumn((prevArray) => prevArray.slice(1));
      }
    } else {
      let arr = [firstColumnPlaceholder];
      let fullArr = [];
      console.log(initialState);
      if (firstColumnPlaceholder > firstColumn[0]) {
        alert("Nie możesz położyć większego na mniejszy");
      } else {
        setFirstColumn(fullArr.concat(arr, firstColumn));
        setFirstColumnPlaceholder([]);
      }
    }
  };

  const chooseQuantity = () => {
    setShowQuantity(true);
  };

  const handleSecondPlaceholder = (secondColumn) => {
    if (firstColumnPlaceholder.length === 0) {
      if (secondColumn.length !== 0) {
        setFirstColumnPlaceholder(secondColumn[0]);
        setSecondColumn((prevArray) => prevArray.slice(1));
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
      if (thirdColumn.length !== 0) {
        setFirstColumnPlaceholder(thirdColumn[0]);
        setThirdColumn((prevArray) => prevArray.slice(1));
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
    <div className='App z-0'>
      {showModal && (
        <div className='absolute z-10 w-full h-full bg-black/50 flex justify-center items-center'>
          <div className='w-[250px] h-[100px] bg-white flex flex-col justify-center items-center'>
            Udało się w czasie {formatTime(time)}
            <button
              className='bg-blue-500 px-2 rounded'
              onClick={() => {
                setShowModal(false);
                handleResetFinish();
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
      {showQuantity && (
        <div className='absolute z-10 w-full h-full bg-black/50 flex justify-center items-center'>
          <div className='w-[250px] h-[250px] bg-white flex flex-col justify-center items-center'>
            Wybierz ilość:
            <button
              onClick={() => {
                setInitialState([1, 2, 3]);
                setShowQuantity(false);
                handleReset();
              }}
              className='bg-green-700 px-4 rounded m-1'
            >
              3
            </button>
            <button
              className='bg-red-600 px-4 rounded m-1'
              onClick={() => {
                setInitialState([1, 2, 3, 4]);
                setShowQuantity(false);
                handleReset();
              }}
            >
              4
            </button>
            <button
              className='bg-purple-500 px-4 rounded m-1'
              onClick={() => {
                setInitialState([1, 2, 3, 4, 5]);
                setShowQuantity(false);
                handleReset();
              }}
            >
              5
            </button>
            <button
              className='bg-orange-500 px-4 rounded m-1'
              onClick={() => {
                setInitialState([1, 2, 3, 4, 5, 6]);
                setShowQuantity(false);
                handleReset();
              }}
            >
              6
            </button>
            <button
              className='bg-green-400 px-4 rounded m-1'
              onClick={() => {
                setInitialState([1, 2, 3, 4, 5, 6, 7]);
                setShowQuantity(false);
                handleReset();
              }}
            >
              7
            </button>
            <button
              className='bg-lime-300 px-4 rounded m-1'
              onClick={() => {
                setInitialState([1, 2, 3, 4, 5, 6, 7, 8]);
                setShowQuantity(false);
                handleReset();
              }}
            >
              8
            </button>
            <button
              className='bg-slate-400 px-4 rounded m-1'
              onClick={() => {
                setInitialState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
                setShowQuantity(false);
                handleReset();
              }}
            >
              9
            </button>
          </div>
        </div>
      )}
      <div>
        <div className='pt-10 flex justify-center items-center'>
          <div className='flex flex-col text-left  border-t border-b w-full justify-start items-center h-24'>
            <h1 className='text-3xl'>Wieża hanoi</h1>
            <div className='flex'>
              <div className='text-2xl w-[100px]'>{formatTime(time)}</div>

              <button
                className='bg-pink-400 px-2 rounded text-xl ml-2'
                onClick={() => {
                  handleReset();
                }}
              >
                Reset
              </button>
            </div>
            {record !== 9999999 ? "Rekord:" + record : "Rekord: ---"}
          </div>
          <div className='w-full flex justify-center items-start border-t border-b h-24'>
            <button className='pt-2' onClick={chooseQuantity}>
              Wybierz ilość klocuchów
            </button>
          </div>
        </div>
        <div className='firstColumnPlaceholder flex h-[40px] justify-center items-center'>
          {firstColumnPlaceholder === 1 && (
            <div className='bg-blue-600 w-[20px] rounded'>
              {firstColumnPlaceholder}
            </div>
          )}
          {firstColumnPlaceholder === 2 && (
            <div className='bg-yellow-400 w-[30px] rounded'>
              {firstColumnPlaceholder}
            </div>
          )}
          {firstColumnPlaceholder === 3 && (
            <div className='bg-green-700 w-[40px] rounded'>
              {firstColumnPlaceholder}
            </div>
          )}
          {firstColumnPlaceholder === 4 && (
            <div className='bg-red-600 w-[40px] rounded'>
              {firstColumnPlaceholder}
            </div>
          )}
          {firstColumnPlaceholder === 5 && (
            <div className='bg-purple-500 w-[40px] rounded'>
              {firstColumnPlaceholder}
            </div>
          )}
          {firstColumnPlaceholder === 6 && (
            <div className='bg-orange-500 w-[40px] rounded'>
              {firstColumnPlaceholder}
            </div>
          )}
          {firstColumnPlaceholder === 7 && (
            <div className='bg-green-400 w-[40px] rounded'>
              {firstColumnPlaceholder}
            </div>
          )}
          {firstColumnPlaceholder === 8 && (
            <div className='bg-lime-300 w-[40px] rounded'>
              {firstColumnPlaceholder}
            </div>
          )}
          {firstColumnPlaceholder === 9 && (
            <div className='bg-slate-400 w-[40px] rounded'>
              {firstColumnPlaceholder}
            </div>
          )}
        </div>
        <div className='flex justify-center items-end '>
          <div className='w-[33vw] h-[300px] flex justify-center items-end '>
            <div className='w-2 h-[150px] bg-slate-600'></div>
          </div>
          <div className='w-[33vw] h-[300px] flex justify-center items-end'>
            <div className='w-2 h-[150px] bg-slate-600'></div>
          </div>
          <div className='w-[33vw] h-[300px] flex justify-center items-end'>
            <div className='w-2 h-[150px] bg-slate-600'></div>
          </div>
        </div>
        <div className='content translate-y-[-300px]  '>
          <div className='content-holder '>
            <div
              onClick={() => {
                handleFirstPlaceholder(firstColumn);
                handleStart();
              }}
              className='singleColumn border-l-2 border-r-2 cursor-pointer'
            >
              {firstColumn.map((value) => (
                <div className={` column${value} rounded`} key={value}>
                  {value}
                </div>
              ))}
            </div>
          </div>
          <div className='content-holder'>
            <div
              onClick={() => handleSecondPlaceholder(secondColumn)}
              className='singleColumn border-r-2 cursor-pointer'
            >
              {secondColumn.map((value) => (
                <div className={`column${value} rounded`} key={value}>
                  {value}
                </div>
              ))}
            </div>
          </div>
          <div className='content-holder'>
            <div
              onClick={() => {
                handleThirdPlaceholder(thirdColumn);
              }}
              className='singleColumn border-r-2 cursor-pointer'
            >
              {thirdColumn.map((value) => (
                <div className={`column${value} rounded`} key={value}>
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='w-full border-t-8 border-slate-600 translate-y-[-300px]'></div>
      </div>
    </div>
  );
}

export default App;
