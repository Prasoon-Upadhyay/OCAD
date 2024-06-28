 
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ModelProvider from './context/models.tsx'
import RequestProvider from './context/requests.tsx'
import ErrorProvider from './context/error.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render( 
  <ErrorProvider>
      <ModelProvider>
        <RequestProvider>
          <App />
        </RequestProvider>
      </ModelProvider> 
  </ErrorProvider>
)
