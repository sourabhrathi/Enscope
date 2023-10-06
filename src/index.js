import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Assets/style/global.css'
import App from './Components/App';
import { AuthContextProvider } from './Utils/auth-context';
import NetworkServices from './Utils/network-services';

NetworkServices()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <AuthContextProvider>
       <App />
       </AuthContextProvider>

  </React.StrictMode>
);
