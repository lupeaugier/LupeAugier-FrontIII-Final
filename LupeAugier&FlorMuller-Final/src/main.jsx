import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { DarkContext } from './ModoContext/DarkContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
        <DarkContext>
            <App /> 
        </DarkContext>
    </React.StrictMode>
);