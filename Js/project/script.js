console.log('script loaded');
import { printCategory } from './Category.js'
import { printProduct } from './Product.js'

 window.logout =function (){
       let loggedUser = localStorage.getItem('loggedUser');
            if (loggedUser) {
                        localStorage.removeItem('loggedUser');
                        window.location = 'index.html'
            }
}

function CheckAuth() {
      let loggedUser = localStorage.getItem('loggedUser');
      console.log(loggedUser);
      let str;
      if (loggedUser) {
            loggedUser = JSON.parse(loggedUser);
            str = `
                  <span style="color: white;">Welcome:${loggedUser.username.toUpperCase()}</span>
          <button class="nav-link" onclick = "logout()">Logout</button>
            `
            
      }
      else {
            str = `  <a class="nav-link" href="Login.html">Login</a>`

      }
      document.getElementById('authnavitem').innerHTML = str
}

function loadPage() {
      printCategory();
      printProduct();
      CheckAuth();
}

window.onload = loadPage;
