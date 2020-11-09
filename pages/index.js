import {useState} from 'react';

function Home(){
    return (
        <div>
            <h1>Contador</h1>
            <Contador />
        </div>
    )
}

function Contador(){
    const [contador, setContador] = useState(0);

    return(
        <div>
            <h2>{contador}</h2>
            <button onClick={() => setContador(contador + 1)}>Adicionar</button>
            <button onClick={() => setContador(contador - 1)}>Subtrair</button>
        </div>
    )
}

export default Home