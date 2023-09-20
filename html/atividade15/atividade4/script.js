
  let currentPlayer = 'X';
  let gameOver = false;
  let playerX = 0;
  let playerO = 0;

  const board = document.getElementById('board');

  const playerXElement = document.getElementById('playerX');
  const playerOElement = document.getElementById('playerO');

  function createCell(row, col) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.row = row;
      cell.dataset.col = col;
      cell.addEventListener('click', handleCellClick);
      return cell;
  }

  function resetGame() {
      board.innerHTML = '';
      currentPlayer = 'X';
      gameOver = false;
      createBoard();
  }

  function checkWinner() {
      const cells = document.querySelectorAll('.cell');

      const winningCombos = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], 
          [0, 3, 6], [1, 4, 7], [2, 5, 8],
          [0, 4, 8], [2, 4, 6] 
      ];

      for (const combo of winningCombos) {
          const [a, b, c] = combo;
          const cellA = cells[a];
          const cellB = cells[b];
          const cellC = cells[c];

          if (
              cellA.textContent &&
              cellA.textContent === cellB.textContent &&
              cellA.textContent === cellC.textContent
          ) {
              cellA.style.color = 'green';
              cellB.style.color = 'green';
              cellC.style.color = 'green';
              return cellA.textContent;
          }
      }

      if ([...cells].every(cell => cell.textContent !== '')) {
          return 'Empate';
      }

      return null;
  }

      function handleCellClick(e) {
      const cell = e.target;

      if (!cell.textContent && !gameOver) {
          cell.textContent = currentPlayer;
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
          const winner = checkWinner();

          if (winner) {
              gameOver = true;

              if (winner === 'Empate') {
                  alert('Empate!');
              } else {
                  alert(`Jogador ${winner} vence!`);
                  if (winner === 'X') {
                      playerX++;
                      playerXElement.textContent = playerX;
                  } else {
                      playerO++;
                      playerOElement.textContent = playerO;
                  }
              }
          }
      }
  }

  function createBoard() {
      for (let row = 0; row < 3; row++) {
          for (let col = 0; col < 3; col++) {
              const cell = createCell(row, col);
              board.appendChild(cell);
          }
      }
  }

  createBoard();

  const resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', resetGame);
