import React from 'react';
import Button from './components/Button';

function handlerclick() {
    alert('Botão clicado!');
}

function App() {
    return (
        <div className="App">
            <h1>Olá React</h1>
            <Button title="Clique" onClick={handlerclick} />
        </div>
    );
}

export default App;