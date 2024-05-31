
// import Componente1 from "./Componente1";
import Product from "./Product";
import products from "./Products";


// const primaCard = {
//   nome: "Iphone X",
//   img: "https://d2e6ccujb3mkqf.cloudfront.net/943afa80-1922-43de-a7d9-8c1b4294a727-1_57539676-9a3c-465d-85d8-5a8f811d04dc.jpg",
//   prezzo: 1100
// }
// const secondaCard = {
//   nome: "Iphone 13",
//   img: "https://d2e6ccujb3mkqf.cloudfront.net/943afa80-1922-43de-a7d9-8c1b4294a727-1_57539676-9a3c-465d-85d8-5a8f811d04dc.jpg",
//   prezzo: 5000
// }

function App() {
  return (
    <div className="App">
      <h2>La nostra prima card</h2>
      <div className="d-flex">

        {/* ITERAZIONE */}
        {
          products.map((prodotto) => {
            console.log(prodotto);
            return <Product key={prodotto.id} {...prodotto} />
          })
        }
        {/* SPREAD OPERATOR */}
        {/* <Product {...primaCard}> */}
          {/* CHILDREN PROPS */}
          {/* <h6>{"DESCRIZIONE PRODOTTO".toLocaleLowerCase()}</h6> */}
        {/* </Product> */}
        {/* <Product {...secondaCard}/> */}

      </div>
      {/* <Componente1></Componente1> */}
    </div>
  );
}

export default App;