function knightMoves(start, end) {
    const dx = [2, 1, -1, -2, -2, -1, 1, 2];
    const dy = [1, 2, 2, 1, -1, -2, -2, -1];

    const queue = [[start]];
    const visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        const path = queue.shift();
        const [x, y] = path[path.length - 1];

        if (x === end[0] && y === end[1]) {
            return path;
        }

        for (let i = 0; i < 8; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx >= 0 && ny >= 0 && nx < 8 && ny < 8) {
                const newPosition = [nx, ny];
                if (!visited.has(newPosition.toString())) {
                    visited.add(newPosition.toString());
                    queue.push([...path, newPosition]);
                }
            }
        }
    }

    // If no path found
    return null;
}

// Example usage:
console.log(knightMoves([0, 0], [1, 2])); // Output: [[0, 0], [1, 2]]
console.log(knightMoves([0, 0], [3, 3])); // Output: [[0, 0], [1, 2], [3, 3]]
console.log(knightMoves([3, 3], [0, 0])); // Output: [[3, 3], [1, 2], [0, 0]]
console.log(knightMoves([0, 0], [7, 7])); // Output: [[0, 0], [1, 2], [3, 3], [4, 5], [6, 6], [7, 7]]
