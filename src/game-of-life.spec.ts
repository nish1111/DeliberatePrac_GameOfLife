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

test('given only middle cell is alive, should die', () => {
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


test('given only first cell in row is alive, should die', () => {
    //arrange
    const sut = new GameOfLife();
    //act
    const grid = [
        [1, 0, 0],
    ];
    let result = sut.play(grid);
    //assert
    console.log(result)
    expect(result).toEqual([
        [0, 0, 0],
    ]);
});

test('given only last cell in row is alive, should die', () => {
    //arrange
    const sut = new GameOfLife();
    //act
    const grid = [
        [0, 0, 1],
    ];
    let result = sut.play(grid);
    //assert
    console.log(result)
    expect(result).toEqual([
        [0, 0, 0],
    ]);
});

test('given cell is alive with 2 live neighbours, should live on', () => {
    //arrange
    const sut = new GameOfLife();
    //act
    const grid = [
        [1, 1, 1],
    ];
    let result = sut.play(grid);
    //assert
    console.log(result)
    expect(result).toEqual([
        [0, 1, 0],
    ]);
});
