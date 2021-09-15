import React, { useState } from 'react';
import Cell from './Cell';
import './Board.css';

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

function Board({ nrows = 4, ncols = 4, chanceLightStartsOn = 0.5 }) {
	const [ board, setBoard ] = useState(createBoard());
	/** create a board nrows high/ncols wide, each cell randomly lit or unlit */
	function createBoard() {
		let initialBoard = Array.from(Array(nrows), () => new Array(ncols));

		for (let i = 0; i < nrows; i++) {
			for (let j = 0; j < ncols; j++) {
				initialBoard[i][j] = Math.random() < chanceLightStartsOn ? true : false;
				// initialBoard[i][j] = true
			}
		}

		return initialBoard;
	}
  
	function hasWon() {
		// TODO: check the board in state to determine whether the player has won.
    
    // return board.every( row => row.every( cell => !cell))
    return board.every((row)=> {
       return row.every((cell)=> {
         
        return cell === true
      })
    })
	}

	function flipCellsAround(coord) {
		setBoard((oldBoard) => {
      const y = coord[0]
      const x = coord[1]
			const flipCell = (y, x, boardCopy) => {

				if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
					boardCopy[y][x] = !boardCopy[y][x];
				}
			};

			// TODO: Make a (deep) copy of the oldBoard
			const boardCopy = oldBoard.map((row) => [ ...row ]);
			// TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x, boardCopy)
			flipCell(y + 1, x, boardCopy);
			flipCell(y - 1, x, boardCopy);
			flipCell(y, x + 1, boardCopy);
			flipCell(y, x - 1, boardCopy);
			// TODO: return the copy
			return boardCopy;
		});
	}

	// if the game is won, just show a winning msg & render nothing else
  if (hasWon()) {
    return <div><h1>YOU WON!</h1> </div>
  }
	// TODO

	let newBoard = [];
	for (let i = 0; i < nrows; i++) {
		let row = [];
		for (let j = 0; j < ncols; j++) {
			// let coord = `${i}-${j}`;
      let coord = [i, j]
			row.push(<Cell isLit={board[i][j]} flipCellsAroundMe={flipCellsAround} coord={coord} />);
		}
		newBoard.push(<tr>{row}</tr>);
	}

	return (
		<table>
			<tbody>{newBoard}</tbody>
		</table>
	);
}

export default Board;
