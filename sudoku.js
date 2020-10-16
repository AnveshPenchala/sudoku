// Solving using backtracking algorithm
// Using puzzle from sudoku_puzzels.txt
const _board = [
    ['0', '0', '0', '2', '6', '0', '7', '0', '1'],
    ['6', '8', '0', '0', '7', '0', '0', '9', '0'],
    ['1', '9', '0', '0', '0', '4', '5', '0', '0'],
    ['8', '2', '0', '1', '0', '0', '0', '4', '0'],
    ['0', '0', '4', '6', '0', '2', '9', '0', '0'],
    ['0', '5', '0', '0', '0', '3', '0', '2', '8'],
    ['0', '0', '9', '3', '0', '0', '0', '7', '4'],
    ['0', '4', '0', '0', '5', '0', '0', '3', '6'],
    ['7', '0', '3', '0', '1', '8', '0', '0', '0'],
];
sodokoSolver(_board);
console.log(_board);

//By using the below function we can find weather the given board is valid or not 
function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }
    }
    return true;
}

//If it is a valid board then
//By using the below function we solve the sodoku puzzle

function sodokoSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == '0') {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = `${k}`;
          if (sodokoSolver(data)) {
           return true;
          } else {
           data[i][j] = '0';
          }
         }
       }
       return false;
     }
   }
 }
 return true;
}
// now by using the command on the terminal: node sudoku.js 
// we get the solved sudoku board 