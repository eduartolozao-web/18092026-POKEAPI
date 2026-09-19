import { useState } from 'react'

function String() {
  const [Texto, setTexto] = useState("qwerty")

  return (
    <>
     
        <button
          type="button"
          onClick={() => setTexto((count) => count + 1)}
        >
          mi texto es {Texto}
        </button>
      
    </>
  )
}

export default String