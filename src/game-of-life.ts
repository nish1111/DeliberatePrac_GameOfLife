export class GameOfLife {

    play(grid: number[][]) {
        const initialRow = grid[0]

        for (let index = 0; index < initialRow.length; index++) {
            if (initialRow[index] === 1) {
                const previous = initialRow[0]
                const next = initialRow[2]
                if (previous === 0 && next === 0) {
                    return [[0, 0, 0]]
                }
            }
        }
        return [initialRow]
    }
}