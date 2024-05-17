 
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ModelProvider from './context/models.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render( 
    <ModelProvider>
      <App />
    </ModelProvider> 
)
