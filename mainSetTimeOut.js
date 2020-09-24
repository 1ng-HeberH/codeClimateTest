// Ale jiji

class GameOfLifeByDAH {

    constructor(cols, rows) {
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

    initializeRandom() {
        const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
        this.grid = this.makeEmptyArray(this.cols, this.rows);
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                this.grid[i][j] = getRandomInt(2);
            }
        }
    };
    
//Imprime la primera generación
    printsFirstGeneration() {
        console.log('Generation 1:');
        for (let i = 0; i < this.cols; i++) {
            let textoColumna = '';
            for (let j = 0; j < this.rows; j++) {
                if (this.grid[i][j] == 0) {
                    textoColumna += '.';
                } else {
                    textoColumna += '*';
                }
            }
            console.log(textoColumna);
        }
    };

    timer() {
        var me = this;
        for (let index = 0; index < 4; index++) {
            setTimeout(function () {
                me.createNextGeneration(index);
            }
                , 1000 * index);
        }
    };

    createNextGeneration(index) { 
        let next = this.makeEmptyArray(this.cols, this.rows);

        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                let state = this.grid[i][j];
                // Edges
                if (i == 0 || i == this.cols - 1 || j == 0 || j == this.rows - 1) {
                    next[i][j] = this.grid[i][j];
                    
                } else {
                    // console.log('Que ondaaaaaaaaa')
                    let neighbors = this.countNeighbors(i, j);
                    console.log('neighbors are:' + neighbors);
                    console.log(`The state is: ${state}`);

                    if (state == 0 && neighbors == 3) {
                        next[i][j] = 1;
                    } else if (state = 1 && (neighbors < 2 || neighbors > 3)) {
                        next[i][j] = 0;
                    } else {
                        next[i][j] = state;
                    }
                }
            }
        }
        console.log('Generation ' + index);
        // console.log(next)
        for (let i = 0; i < this.cols; i++) {
            let textoColumna = '';
            for (let j = 0; j < this.rows; j++) {
                if (next[i][j] == 0) {
                    textoColumna += '.';
                } else {
                    textoColumna += '*';
                }
            }
            console.log(textoColumna);
        }
    }

    countNeighbors(x, y) {
        let sum = 0;
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                sum += this.grid[x + i][y + j];
            }
        }
        sum -= this.grid[x][y];
        return sum;
    }

}

let firstGame = new GameOfLifeByDAH(8, 4);
firstGame.makeEmptyArray();
firstGame.initializeRandom();
firstGame.printsFirstGeneration();
firstGame.timer();


// Write a test that changes the array