import { useState } from "react"
import Aluno from "./Aluno"

function App() {
  const alunos = ["Alan", "João", "Maria", "Pedro", "Vilma"]

  const [notaPadrao, setNotaPadrao] = useState(0)
  return (
    <>
      <h1>Lançar Nota</h1>
      <p>
        Disciplina:
        <input type="text"></input>
      </p>
      <p>
        <span>Aluno</span>
        <span>Nota</span>
      </p>
      
      {alunos.map((al, index) =>
          <Aluno key={index} nome={al} nota={notaPadrao}></Aluno>
      )}

      <button onClick={() => setNotaPadrao(0)}>Limpar</button>
      <button>Salvar</button>
    </>
  )
}

export default App
