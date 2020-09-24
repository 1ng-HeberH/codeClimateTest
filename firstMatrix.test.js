// const { timeStamp } = require('console')
//import { MainGameBoard} from './mainGame';
import MainGameBoard from './mainGame';
jest.mock('./mainGame');

it('should return the total of row per column'), () =>{
    // const MatrixExpected ={
    //     //this.grid;
    //     cols: 8,
    //     rows: 9,
    //     //this.nextGrid;
    // }
    const newFMatrix = new MainGameBoard(9,8);
    const result = newFMatrix.makeEmptyArray();
    expect(resul.rows).toBe(9);
    //expect(resul.cols).toBe(8);
}

// test('createMatrix return 2', () => {
//     expect(createMatrix()).toBe(2); 
// }); 

// /****************************/

// import { ProductsClient } from './ProductsClient';

// jest.mock('./ProductsClient');

// it('should return the product', async () => {
//     const expectedProduct = {
//       id: 1,
//       name: 'football',
//     };
//     const productManager = new ProductManager();
//     const result = await productManager.getProductToManage(1); // Will throw error!
  
//     expect(result.name).toBe('football');
//   });