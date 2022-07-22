export class GameOfLife {

    play(grid: number[][]) {
        const initialRow = grid


        const previous = initialRow[0][0]
        const next = initialRow[0][2]
        if (previous === 0 && next === 0) {
            return [[0, 0, 0]]
        }
        return initialRow
    }
}