
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Loader from './components/loader.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>

    <Loader>
        <App />
    </Loader>
</BrowserRouter>


)
