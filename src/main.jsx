
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Loader from './components/loader.jsx'

createRoot(document.getElementById('root')).render(

   <BrowserRouter>
      <Loader>
         <App />
      </Loader>
   </BrowserRouter>

)
