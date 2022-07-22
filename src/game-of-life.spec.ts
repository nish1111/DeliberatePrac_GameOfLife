import { GameOfLife } from "./game-of-life";

test('given grid with no living cells, should return', () => {
    //arrange
    const sut = new GameOfLife();
    //act
    const grid = [
        [0, 0, 0],
    ];
    let result = sut.play(grid);
    //assert
    expect(result).toEqual([
        [0, 0, 0],
    ]);
});

test('given one cell is alive, should die', () => {
    //arrange
    const sut = new GameOfLife();
    //act
    const grid = [
        [0, 1, 0],
    ];
    let result = sut.play(grid);
    //assert
    console.log(result)
    expect(result).toEqual([
        [0, 0, 0],
    ]);
});