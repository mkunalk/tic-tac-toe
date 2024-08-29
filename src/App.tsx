import { useState } from 'react'
import './App.css'
import Square from './Sqaure';

function App() {
  const [history,setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setxIsNext] = useState(true);
  const currentSquares = history[history.length-1];



  function handleClick(i:number){
    if(currentSquares[i] || calculateWinners(currentSquares)){
      return;
    }
    const nextSquares = currentSquares.slice();
    if(xIsNext)
      nextSquares[i] = 'X';
    else
      nextSquares[i] = 'O';

    setHistory([...history,nextSquares]);
    setxIsNext(!xIsNext);
  }

  const winner = calculateWinners(currentSquares);
  let status;
  const won = Array(9).fill(false);
  if(winner){
    status = "Winner " + (xIsNext? "O":"X");
    for(const i of winner){
      won[i] = true;
    }
  }
  
  else
    status = "Next turn " + (xIsNext? 'X':'O');
  

  return (
    <>
    <div className='flex-container'>
      <div className='result'>{status}</div>
      <div>
        <div className='board-row'>
          <Square won={won[0]} value={currentSquares[0]} onSquareClick={()=>handleClick(0)}/>
          <Square won={won[1]} value={currentSquares[1]} onSquareClick={()=>handleClick(1)}/>
          <Square won={won[2]} value={currentSquares[2]} onSquareClick={()=>handleClick(2)}/>
        </div>
        <div className='board-row'>
          <Square won={won[3]} value={currentSquares[3]} onSquareClick={()=>handleClick(3)}/>
          <Square won={won[4]} value={currentSquares[4]} onSquareClick={()=>handleClick(4)}/>
          <Square won={won[5]} value={currentSquares[5]} onSquareClick={()=>handleClick(5)}/>
        </div>
        <div className='board-row'>
          <Square won={won[6]} value={currentSquares[6]} onSquareClick={()=>handleClick(6)}/>
          <Square won={won[7]} value={currentSquares[7]} onSquareClick={()=>handleClick(7)}/>
          <Square won={won[8]} value={currentSquares[8]} onSquareClick={()=>handleClick(8)}/>
        </div>
      </div>
      <div>
        {history.map((item,index) => {
          return <li key={index}>
            <button className='btn' onClick={()=>{
              if(index === 0)
                setHistory([Array(9).fill(null)]);
              setHistory(history.slice(0,index+1));
            }}>Go to {index}</button>
          </li>
        })}
      </div>
    </div>
    </>
  )
}

function calculateWinners(gamePositions:Array<string>){

  // if(gamePositions == null){
  //   return null;
  // }

  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let i=0;i<lines.length;i++){
    const [a, b, c] = lines[i];
    if(gamePositions[a] && gamePositions[a] === gamePositions[b] && gamePositions[a] === gamePositions[c]){
      return lines[i];
    }
  }
  return null;
}

export default App
