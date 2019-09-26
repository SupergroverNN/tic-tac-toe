class TicTacToe {
  constructor() {
    this.gb = [[null, null, null], [null, null, null], [null, null, null]];
    this.currentPlayer = "x";
    this.winner = null;
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.gb[rowIndex][columnIndex] === null) {
      this.gb[rowIndex][columnIndex] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === "x" ? "o" : "x";
    }
    this.gb.forEach(row => {
      if (this.winner === null && row[0] === row[1] && row[0] === row[2] && row[0] !== null) {
        this.winner = row[0];
      }
    });
    if (this.winner === null) {
      for (let i = 0; i < 3; i++) {
        if (
          this.gb[0][i] !== null &&
          this.gb[0][i] === this.gb[1][i] &&
          this.gb[0][i] === this.gb[2][i]
        ) {
          this.winner = this.gb[0][i];
        }
      }
    }
    if (this.winner === null) {
      if (
        (this.gb[0][0] !== null &&
          this.gb[0][0] === this.gb[1][1] &&
          this.gb[0][0] === this.gb[2][2]) ||
        (this.gb[0][2] !== null &&
          this.gb[0][2] === this.gb[1][1] &&
          this.gb[0][2] === this.gb[2][0])
      ) {
        this.winner = this.gb[1][1];
      }
    }
  }

  isFinished() {
    let count = 0;
    this.gb.forEach(row => row.includes(null) && count++);
    return this.winner !== null || count === 0;
  }

  getWinner() {
    return this.winner;
  }

  noMoreTurns() {
    let count = 0;
    this.gb.forEach(row => row.includes(null) && count++);
    return count === 0;
  }

  isDraw() {
    let count = 0;
    this.gb.forEach(row => row.includes(null) && count++);
    return count === 0 && this.winner === null;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.gb[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
