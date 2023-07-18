import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'

// ! PARA O TYPESCRIPT ENTENDER QUE PODE IGNORAR O ERRO DE QUE TALVEZ O ELEMENTO NÃO EXISTA
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
