export default class MainGameBoard{

    constructor(rows,cols) {
        this.grid;
        this.cols = cols;
        this.rows = rows;
        this.nextGrid;
    };

    makeEmptyArray() {
        let arr = new Array(this.cols);
        for (let i = 0; i < arr.length; i++) {
            arr[i] = new Array(this.rows);
        }
        return arr;
    };

}

function createMatrix(){

    return 2;
}


//module.exports = MainGameBoard.makeEmptyArray;