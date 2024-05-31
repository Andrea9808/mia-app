import React from 'react'

export default function Componente1() {
  return (
    <section>
        <h3 className='card'>Componente 1</h3>
        <Saluto />
    </section>
  )
}
  const Persona = () => {
    return (
      <div>
        Mi chiamo Andrea
      </div>
    )
  }

  const Messaggio = () => {
    return (
      <div>
        Ciao sono un messaggio
      </div>
    )
  }

  const Saluto = () => {
    return (
      <React.Fragment>
        <Persona />
        <Messaggio />
      </React.Fragment>
    )
  }

