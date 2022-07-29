export class GameOfLife {

    play(grid: number[][]) {
        let row = grid[0]

        return [row.map((cell, index) => {
            let previous = row[index - 1] ?? 0
            let next = row[index + 1]

            if (previous === 1 && next === 1) {
                return 1
            }
            return 0;
        })]
    }
}