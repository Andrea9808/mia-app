
//useState, è un hook di React.
//Permettono di utilizzare lo stato 
//e altre funzionalità di React all'interno delle funzioni componenti,
// anziché essere limitati alle classi
import React, { useState } from 'react';


  // DESTRUTTURAZIONE 1 + CHILDREN PROPS
const Product = ({prezzo, img, nome, children}) => {

  // GESTIONE EVENTI (esempio)
  const handleClick = () => {
    console.log('bottone premuto')
  }
  // GESTIONE EVENTI (esempio)
  const paramsHandler = (prezzo) => {
    console.log(prezzo);
  }

  // GESTIONE EVENTI (esempio)
  // const eventHandler = (price) => (e) => {
  //   console.log(e.target.innerText, price);

  // }

  // GESTIONE EVENTI (esempio)
  function eventHandler(price) {
    return function(e) {
      console.log(e.target.innerText, price);
    }
  }

  const [background, setBackground] = useState('transparent');


  // DESTRUTTURAZIONE 2
  // const {nome, img, prezzo} = props

  //es. stile
  const hrStyle = {
    color: 'violet'
  }
  // const img = "https://d2e6ccujb3mkqf.cloudfront.net/943afa80-1922-43de-a7d9-8c1b4294a727-1_57539676-9a3c-465d-85d8-5a8f811d04dc.jpg"
  // const prezzo = 1100
  // const alt = "product"

  return (
    // EVENTO DIRETTAMENTE IN LINEA
    <article onMouseOver={() => console.log(nome)} className='w-25' >
      <div  
        onMouseOver={() => setBackground('red')}
        onMouseOut={() => setBackground('transparent')}
        className='w-25'
        style={{ background }} 
        className='card text-center'>

        <img  src={img} alt={`${nome}`} onClick={handleClick}/>
        <h3>{nome}</h3>
        <h6>Ne rimangono: {2 * 3}</h6>

        {/* CHILDREN PROPS */}
        <p>{children}</p>
        <hr style={hrStyle} />

        {/* GESTIONE EVENTI */}
        <button onClick={()=> alert(`nome ${nome}`)} className='btn btn-success'>{prezzo}€</button>
        <button onClick={eventHandler(prezzo)} className='btn btn-success'>args</button>
      </div>
    </article>
    
  )
  
}


export default Product
