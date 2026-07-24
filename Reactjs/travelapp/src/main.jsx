import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store/store.js'
import UserLoggedProvider from './utils/UserLoggedContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
         <Provider store={store}>
          <UserLoggedProvider >
               <App />
          </UserLoggedProvider>
         </Provider>
      </BrowserRouter>
  </StrictMode>,
)
