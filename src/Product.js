import React from 'react'


const Product = () => {

  const hrStyle = {
    color: 'violet'
  }
  const img = "https://d2e6ccujb3mkqf.cloudfront.net/943afa80-1922-43de-a7d9-8c1b4294a727-1_57539676-9a3c-465d-85d8-5a8f811d04dc.jpg"
  const prezzo = 1100
  const alt = "product"

  return (
    <article className='d-flex align-items-center justify-content-center'>
      <div className='card w-25 text-center'>
        <img src={img} alt={`${alt}`} />
        <h6>Ne rimangono: {2 * 3}</h6>
        <h6>{"DESCRIZIONE PRODOTTO".toLocaleLowerCase()}</h6>
        <hr style={hrStyle} />
        <button className='btn btn-success'>{prezzo}€</button>
      </div>
    </article>
  )
}

export default Product
