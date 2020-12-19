import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    for(let i = 0; i < nrows; i++) {
      initialBoard.push([...Array(ncols)].map(i => {
        const random = Math.random();
        return random > chanceLightStartsOn ? false : true;
      }))
    }
    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    return board.every(i => i.every(j => !j))
    
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };
      // TODO: Make a (deep) copy of the oldBoard

      // TODO: in the copy, flip this cell and the cells around it

      // TODO: return the copy
      const copy = oldBoard.map(i => [...i]);

      flipCell(y,x,copy);
      flipCell(y-1,x,copy);
      flipCell(y,x-1,copy);
      flipCell(y,x+1,copy);
      flipCell(y+1,x,copy);

      return copy;
    });
  }

  // if the game is won, just show a winning msg & render nothing else
      if(hasWon()) {
        return <div className='Board-win'>You Win!</div>
      }



  // make table board
  const HTMLBoard = [];
  for(let i = 0; i < ncols; i++) {
    const row = [];
    for(let j = 0; j < nrows; j++) {
      let coord = `${i}-${j}`;
      row.push(<Cell key={coord} flipCellsAroundMe={()=>flipCellsAround(coord)} isLit={board[i][j]}/>
      )
    }
    HTMLBoard.push(<tr key={i}>{row}</tr>);
  }

  return (
    <table className='Board'>
      <tbody>{HTMLBoard}</tbody>
    </table>
  )
}

export default Board;
