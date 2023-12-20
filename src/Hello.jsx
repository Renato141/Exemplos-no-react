import { useState } from "react"

function Hello({name = "Chama", children}) {
    const [idade, setIdade] = useState(18)
    const [occ, setOcc] = useState("Professor")
    return(
        <>
            <h1>Hello, {name}!</h1>
            <p> Seu filho é {children}!</p>
            <h1>Sua idade é {idade}</h1>
            <p> Sua profisão é {occ}</p>
            <button
                onClick={() => setIdade(i => ++i)}
            > 
                + 01 ano
            </button>
            <input type="text" value={occ} onChange={(e) => setOcc(e.target.value)}></input>
        </>  
    )
}

export default Hello
