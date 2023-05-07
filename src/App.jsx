import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="chickgold-header">
          <div className="chickgold-div-img">
            <img
              className="chickgold-img"
              src="src/resources/chicks.PNG"
              alt="logo"
              width="150"
              height="40"
            />
          </div>

          <div>
            <span className="dropdown">
              CURRENCY <span className="icon chevron-down"></span>
            </span>
            <span className="dropdown">
              ITEMS <span className="icon chevron-down"></span>
            </span>
            <span className="dropdown">
              ACCOUNTS <span className="icon chevron-down"></span>
            </span>
            <span className="dropdown">
              SERVICES <span className="icon chevron-down"></span>
            </span>
            <span className="dropdown">
              SWAP <span className="icon chevron-down"></span>
            </span>
            <span className="dropdown">
              SELL <span className="icon chevron-down"></span>
            </span>
          </div>
        </div>
        <div className="sign-in-header">
          <div>
            <span className="dropdown">
              USD <span className="icon chevron-down"></span>
            </span>
            <span className="cart">
              <span className="shopping-card-header"></span>CART (5)
            </span>
          </div>

          <button className="sign-in">
            Sign In <span className="user"></span>
          </button>
        </div>
      </header>
      <body className="body">
        <div className="custom-card">
          <div className="custom-card-header">
            <div className="custom-card-header-stock">
              <span className="on-sale">
                <span className="dot"></span>ON SALE
              </span>
              <span className="in-stock">In stock</span>
            </div>
            <div className="custom-card-header-input">
              <input
                className="custom-card-header-input-input"
                value="1"
                type="number"
                size="5"
              />
            </div>
          </div>
          <div className="custom-card-body">
            <img
              src="src/resources/bleach1.png"
              alt="primer objeto"
              width="80"
              height="80"
            />
            <div className="custom-card-body-title">
              <span className="titulo">Blue Partyhat</span>
              <img
                src="src/resources/BleachIcon.PNG"
                alt="bleach icon"
                width="25"
                height="25"
              />
            </div>
            <div className="precio">
              <span className="precio-actual">$450.00</span>
              <span className="precio-tachado">$522.50</span>
            </div>
            <div className="body-text">
              <span className="texto-body">
                Lorem ipsum dolor sit amet consetetur sadipscing elitr
              </span>
            </div>
          </div>
          <div className="custom-card-footer">
            <button className="buttons detail-button">Details</button>
            <button className="buttons add-button">
              <span className="add-button-span">Add</span>
              <span className="icon shopping-card"></span>
            </button>
          </div>
        </div>
      </body>

      <footer className="footer">
        <div className="formas-pago">
          <div className="formas-pago-ordenado">
            <img src='src/resources/visa-and-mastercard-logo-26.png' alt='visa' width='150' height='40' />
            <img src='src/resources/American-Express-Logo-PNG-File.png' alt='american express' width='75' height='40' />
            <img src='src/resources/Skrill_logo.png' alt='skrill' width='75' height='40' />
            <img className="monedas-virtuales" src='src/resources/monedas.PNG' alt='bitcoin' width='115' height='35' />
            <span className="monedas-virtuales-span">and 50+ more</span>
          </div>
        </div>
        <div className="bottom">
          <div className="redes-sociales">
            <img src='src/resources/redes.PNG' alt='redes sociales' width='230' height='60' />
          </div>
          <div className="informacion">

          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
