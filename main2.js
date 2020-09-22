class celula {

    constructor(status, neighbors) {
        this.status = status;
        this.neighbors = neighbors;
      }
    // CONDICIONES PARA LA CELULA
    // 1 = VIVO    0 = MUERTO

    getStatus() {
        return this.status;
    }

    setStatus(status){
        this.status=status;
    }

    setNeighbors(Neighbors) {
        this.neighbors = Neighbors;
    }

    getStatusSymbol() {
        cellSymbol(this.status);
    }

    getNeighbors() {
        return this.neighbors;
    }

}


console.log('Hola');

var numX = 0, numY = 0;
let arrayCells;
var resultBoard = '';
var cell;
let loopControler = 0;
let newArray;

initGame();
//setTimeout(iteration(array),1000);

function initGame() {
    //let arrayCells;
    resultBoard = '';
    // numX = parseInt(prompt('Ingrese el numero de filas: '));
    // numY = parseInt(prompt('Ingrese el numero de columnas: '));
    numX = 8;
    numY = 9;
    arrayCells = new Array(numX);
    for (i = 0; i < arrayCells.length; i++) {
        arrayCells[i] = new Array(numY);
    }
    for (let x = 0; x < numX; x++) {
        for (let y = 0; y < numY; y++) {
            var randomvar = Math.random();
            if (randomvar >= 0.5) {
                cell = new celula(0, 0);
                arrayCells[x][y] = cell;
            } else {
                cell = new celula(1, 0);
                arrayCells[x][y] = cell;
            }
            resultBoard+= arrayCells[x][y].getStatusSymbol();
        }
        resultBoard += '\n';
    }
    newArray=arrayCells;
    console.log(resultBoard);
    iteration(arrayCells)
    return arrayCells.length;
}

function iteration(ParamarrayCells){
    console.log('Generacion '+(loopControler+1) +' :');
    for (var x = 0; x < ParamarrayCells.length; x++) {
        for (var y = 0; y < ParamarrayCells[x].length; y++) {
            let neighborsCount = countNeighbors(x,y);
            ParamarrayCells[x][y].setNeighbors(neighborsCount);
            doaFunction(ParamarrayCells[x][y],x,y);
        }
    }
    loopControler++;
    showResult(newArray);
    //return newArray;
    if(loopControler<5){
        iteration(newArray);
    }
}

function countNeighbors(x,y){
    let neighbors = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            try {
                
                if (ParamarrayCells[x + i][y + j].getStatus() == 1) {
                    if(ParamarrayCells[x][y].getStatus() == 1 && i==0 && j==0){
                        //console.log('se conto solo');
                    }else{
                        neighbors++;
                    }
                    
                }
            } catch (e) {
                
            }
        }
    }
    return neighbors;
};


function doaFunction(cell,x,y) {
    console.log(cell);
    if ((cell.getStatus() == 1) && (cell.getNeighbors() < 2)) {
        newArray[x][y].setStatus(0);         // Soledad
        return 0;
    } else if ((cell.getStatus() == 1) && (cell.getNeighbors() > 3)) {
        newArray[x][y].setStatus(0);         // Sobrepoblación
        return 0;
    } else if ((cell.getStatus() == 0) && (cell.getNeighbors() == 3)) {
        newArray[x][y].setStatus(1);         // Reproducción
        return 1;
    } else {
        newArray[x][y] = cell;
    }
}

function showResult(array){
    resultBoard = '';
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array[x].length; y++) {
            resultBoard += arrayCells[x][y].getStatusSymbol();
        }
        resultBoard += '\n';
    }
    console.log(resultBoard);
}

function cellSymbol(status) {
    
    if ( status == 0) {
        return '.';
    } else {
        return '*';
    }

}




module.exports = initGame;
//module.exports = doaFunction;
module.exports = cellSymbol;
// Aqui tiene que ir el nombre de la funcion

