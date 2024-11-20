// Get references to the canvas and related elements
const canvas = document.getElementById('gameCanvas');
const button = document.getElementById('startButton');
const timeOut = document.getElementById('timeOutMessage');
const winMessage = document.getElementById('winMessage');

// Global variables
let player = { x: 1, y: 1 }; // Starting position
const cellSize = 50; // Size of each maze cell
let context = canvas.getContext('2d');

// Maze layout (1 for wall, 0 for path)
const mazeLayout = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// Function to draw the maze
function drawMaze() {
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    for (let row = 0; row < mazeLayout.length; row++) {
        for (let col = 0; col < mazeLayout[row].length; col++) {
            if (mazeLayout[row][col] === 1) {
                context.fillStyle = 'black'; // Wall
            } else {
                context.fillStyle = 'white'; // Path
            }
            context.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
    }
    drawPlayer(); // Draw the player after the maze
}

// Function to draw the player
function drawPlayer() {
    context.fillStyle = 'blue';
    context.beginPath();
    context.arc(
        player.x * cellSize + cellSize / 2,
        player.y * cellSize + cellSize / 2,
        cellSize / 4,
        0,
        Math.PI * 2
    );
    context.fill();
}

// Function to handle movement
function handleKeyPress(event) {
    const key = event.key;
    let newX = player.x;
    let newY = player.y;

    if (key === 'ArrowUp') newY -= 1;
    if (key === 'ArrowDown') newY += 1;
    if (key === 'ArrowLeft') newX -= 1;
    if (key === 'ArrowRight') newX += 1;

    // Check if the new position is within the maze and not a wall
    if (mazeLayout[newY] && mazeLayout[newY][newX] === 0) {
        player.x = newX;
        player.y = newY;
        drawMaze();
    }

    // Check if the player has reached the goal
    if (player.x === mazeLayout[0].length - 2 && player.y === mazeLayout.length - 2) {
        winMessage.classList.remove('d-none');
    }
}

// Function to start the game
function startGame() {
    player = { x: 1, y: 1 }; // Reset player position
    timeOut.classList.add('d-none'); // Hide timeout message
    winMessage.classList.add('d-none'); // Hide win message
    drawMaze(); // Draw the maze
    document.addEventListener('keydown', handleKeyPress); // Enable keyboard controls
}

// Add event listener to the Start button
button.addEventListener('click', startGame);
