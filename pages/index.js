import {useState} from 'react';
import Helmet from 'react-helmet'

function Home(){
    return (
        <div>
            <Helmet>
                <title>Teorema de Pitágoras</title>
                <link rel="shortcut icon" href="https://image.winudf.com/v2/image1/Y29tLmluaXR6ZXJfZGV2LnRlb3JlbWFQaXRhZ29yYXNfaWNvbl8xNTQxMTAxMDU5XzA0Ng/icon.png?w=170&fakeurl=1" type="image/x-icon"/>
            </Helmet>

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