import React from 'react'
import "./App.css"
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Home from "./components/Home"
import Success from './components/Success'

function App() {

    return (
        <div className="App">
            <ReactNotifications />
            <h1>React Toast component</h1>
            <h2>Type</h2>
            <Home />
            <Success />
        </div>
    );
}

export default App;

