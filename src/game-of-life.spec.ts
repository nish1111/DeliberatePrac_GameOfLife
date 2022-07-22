import { GameOfLife } from "./game-of-life";

test('given grid with no living cells, should return', () => {
    //arrange
    const sut = new GameOfLife();
    //act
    const grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    let result = sut.play(grid);
    //assert
    expect(result).toBe([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]);
});