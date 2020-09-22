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

    getNeighbors() {
        return this.neighbors;
    }

    // getStatusSymbol() {
    //     cellSymbol(this.status);
    // }
}


console.log('Hola');

var numX = 4, numY = 4;
let arrayCells;
var resultBoard = '';
var cell;
let loopControler = 0;
let newArray;

initGame();
function initGame() {
    arrayCells = new Array(numX);
    for (i = 0; i < arrayCells.length; i++) {
        arrayCells[i] = new Array(numY);
    }
    for (let x = 0; x < numX; x++) {
        for (let y = 0; y < numY; y++) {
            arrayCells[x][y] = createCell();
            resultBoard+= cellSymbol(arrayCells[x][y].getStatus());
        }
        resultBoard += '\n';
    }
    newArray=arrayCells;
    console.log(resultBoard);
    iteration(arrayCells);
    //return arrayCells.length;
}

function createCell(){
    var randomvar = Math.random();
    if (randomvar >= 0.5) {
        cell = new celula(0, 0);
    } else {
        cell = new celula(1, 0);
    }
    return cell
}

function iteration(ParamarrayCells){
    //newArray=ParamarrayCells;
    console.log('Generacion '+(loopControler+1) +' :');
    for (var x = 0; x < ParamarrayCells.length; x++) {
        for (var y = 0; y < ParamarrayCells[x].length; y++) {
            //console.log("X: "+x+" Y: "+y)
            let neighborsCount = countNeighbors(ParamarrayCells,x,y);
            //console.log("neighborsCount: "+neighborsCount);
            ParamarrayCells[x][y].setNeighbors(neighborsCount);
            let statusgot=doaFunction(ParamarrayCells[x][y]);
            //console.log("statusgot: "+statusgot+" de fila: "+x+" y columna y: "+y);
            newArray[x][y].setStatus(statusgot);
        }
        //console.log("***********Siquiente fila**************")
    }
    loopControler++;
    showResult(newArray);
    //return newArray;
    if(loopControler<1)
        iteration(newArray);
    
}


function countNeighbors(arrayCheck,x,y){
    let neighbors = 0;
    if  (y-1 >= 0 && arrayCheck[x][y-1].getStatus() ==1){
        neighbors++;
        //console.log("izquerda");
    }
    if  (y+1 < arrayCheck[x].length && arrayCheck[x][y+1].getStatus() ==1){
        neighbors++;
        //console.log("derecha");
    }
    if  ( x-1 >= 0 && arrayCheck[x-1][y].getStatus() ==1){
        neighbors++;
       // console.log("arriba");
    }
    if  (x+1 < arrayCheck.length && arrayCheck[x+1][y].getStatus() ==1){
        neighbors++;
        //console.log("abajo");

    }
    if  (x-1 >= 0 && y-1 >= 0 && arrayCheck[x-1][y-1].getStatus() ==1){
        neighbors++;
        //console.log("arriba izquierda");
    }
    if  (x-1 >= 0 && y+1 < arrayCheck[x].length && arrayCheck[x-1][y+1].getStatus() ==1 ){
        neighbors++;
        //console.log("arriba derecha");
    }
    if  (y-1 >= 0 && x+1 < arrayCheck.length && arrayCheck[x+1][y-1].getStatus() ==1  ){
        neighbors++;
        //console.log("abajo izquierda");
    }
    if  ( y+1 < arrayCheck[x].length && x+1 < arrayCheck.length && arrayCheck[x+1][y+1].getStatus() ==1 ){
        neighbors++;
        //console.log("abajo derecha");
    }
    // for (let i = -1; i <= 1; i++) {
    //     for (let j = -1; j <= 1; j++) {
    //         try {
    //             if (arrayCheck[x + i][y + j].getStatus() == 1) {
    //                 if(arrayCheck[x][y].getStatus() == 1 && i==0 && j==0){
    //                     //console.log('se conto solo');
    //                 }else{
    //                     neighbors++;
    //                 }
    //             }
    //         } catch (e) {
    //         }
    //     }
    // }
    return neighbors;
};


function doaFunction(cell) {
    //console.log(cell);
    if (cell.getNeighbors() < 2) {
        //newArray[x][y].setStatus(0);         // Soledad
        return 0;
    } else if (cell.getNeighbors() > 3) {
      //  newArray[x][y].setStatus(0);         // Sobrepoblación
        return 0;
    } else if ((cell.getStatus() === 1) && ((cell.getNeighbors() === 2) || (cell.getNeighbors() === 3)) ) {
        //newArray[x][y].setStatus(1);         // Reproducción
        return 1;
    } else if (cell.getStatus() === 0 && (cell.getNeighbors() === 3)){
        //newArray[x][y].setStatus(1);         // same
        return 1;
    }else if (cell.getStatus() === 0 && (cell.getNeighbors() != 3)){
        return 0;
    }
    // else{
    //     return 0;
    // }

}

function showResult(array){
    resultBoard = '';
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array[x].length; y++) {
            resultBoard += cellSymbol(arrayCells[x][y].getStatus());
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




// module.exports = initGame;
// //module.exports = doaFunction;
// module.exports = cellSymbol;
// // Aqui tiene que ir el nombre de la funcion

