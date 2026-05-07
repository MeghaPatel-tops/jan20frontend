console.log('script loaded');
import {printCategory} from './Category.js'
import {printProduct} from './Product.js'

function loadPage (){
      printCategory();
      printProduct();
}

window.onload = loadPage;
