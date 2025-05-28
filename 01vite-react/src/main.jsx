import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const element = (<a href='https://www.google.com'>Click me to visit Google</a>)

const reactElement = React.createElement(
    'a',
    { href: 'https://www.google.com', target: '_blank' },
    'to Google'
)

createRoot(document.getElementById('root')).render(
    <App />
)
