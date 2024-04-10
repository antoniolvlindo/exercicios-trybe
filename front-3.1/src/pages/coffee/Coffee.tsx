import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cofee = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/');
  }

  function returnPage() {
    navigate(-1);
  }

return (
  <>
    <button onClick= { handleClick }>Voltar para a pagina principal</button>
    <button onClick = { returnPage }>Retornar</button>
  </>
  )
}

export default Cofee