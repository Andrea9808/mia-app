import React from 'react'


  // DESTRUTTURAZIONE 1 + CHILDREN PROPS
const Product = ({prezzo, img, nome, children}) => {

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
    <article className='w-25'>
      <div className='card text-center'>
        <img  src={img} alt={`${nome}`} />
        <h3>{nome}</h3>
        <h6>Ne rimangono: {2 * 3}</h6>

        {/* CHILDREN PROPS */}
        <p>{children}</p>
        <hr style={hrStyle} />
        <button className='btn btn-success'>{prezzo}€</button>
      </div>
    </article>
    
  )
  
}


export default Product
