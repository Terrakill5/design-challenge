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
        <div className="body-container">
          <div className="body-title-container">
            <span className="body-title">Condimentum consectetur</span>
          </div>
          <nav className="body-nav">
            <div className="select-game">
              <div className="select-game-text">
                <span className="sword"></span> <span>Select a game</span>
              </div>
              <div className="select-game-icon">
                <span className="caret-down"></span>
              </div>
            </div>
            <div className="search-parameters">
              <div className="search">
                <span className="magnifying-glass"></span>
                <span className="search-text">Search</span>
              </div>
              <div className="search-price">
                <div className="search-price-title">
                  <div>
                    <span className="bag"></span>
                  </div>
                  <div className="search-price-subtitle">
                    <span className="search-price-price">Price</span>
                    <span className="search-price-all">All</span>
                  </div>
                </div>
                <div className="select-game-icon">
                  <span className="caret-down"></span>
                </div>
              </div>
              <div className="search-item">
                <div className="search-price-title">
                  <div>
                    <span className="feather"></span>
                  </div>
                  <div className="search-price-subtitle">
                    <span className="search-price-price">Item Type</span>
                    <span className="search-price-all">All</span>
                  </div>
                </div>
                <div className="select-game-icon">
                  <span className="caret-down"></span>
                </div>
              </div>
            </div>
          </nav>
          <div className="card-container">
            <div className="card-container-header">
              <div>
                <span>Showing 20 - from 125</span>
              </div>
              <div className="search-item">
                <div className="search-price-title">
                  <div>
                    <span className="feather"></span>
                  </div>
                  <div className="search-price-subtitle">
                    <span className="search-price-price">Sort By</span>
                    <span className="search-price-all">featured</span>
                  </div>
                </div>
                <div className="select-game-icon">
                  <span className="caret-down"></span>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12 col-xs-6 col-md-4 col-lg-3 col-xl-2">
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
                </div>
              </div>
            </div>

            <div className="card-container-footer">
              <button className="button-move button-transparent"><span className="caret-left"></span></button>
              <button className="button-active">1</button>
              <button className="button-transparent">2</button>
              <button className="button-transparent">3</button>
              <button className="button-transparent">4</button>
              <button className="button-transparent">...</button>
              <button className="button-transparent">11</button>
              <button className="button-move button-transparent"><span className="caret-right"></span></button>
            </div>
          </div>
        </div>
      </body>

      <footer className="footer">
        <div className="formas-pago">
          <div className="formas-pago-ordenado">
            <img
              src="src/resources/visa-and-mastercard-logo-26.png"
              alt="visa"
              width="150"
              height="40"
            />
            <img
              src="src/resources/American-Express-Logo-PNG-File.png"
              alt="american express"
              width="75"
              height="40"
            />
            <img
              src="src/resources/Skrill_logo.png"
              alt="skrill"
              width="75"
              height="40"
            />
            <img
              className="monedas-virtuales"
              src="src/resources/monedas.PNG"
              alt="bitcoin"
              width="115"
              height="35"
            />
            <span className="monedas-virtuales-span">and 50+ more</span>
          </div>
        </div>
        <div className="bottom">
          <div className="redes-sociales">
            <img
              src="src/resources/redes.PNG"
              alt="redes sociales"
              width="230"
              height="60"
            />
          </div>
          <div className="informacion">
            <div className="informacion-imagen informacion-grid">
              <img
                className="informacion-imagen-img"
                src="src/resources/footer1.PNG"
                alt="chicks gold footer"
                width="200"
                height="50"
              />
              <p className="subtitulos-footer">support@chicksgold.com</p>
            </div>
            <div className="informacion-chicks">
              <span className="titulo-footer">Chicks Gold</span>
              <p className="subtitulos-footer">Games</p>
              <p className="subtitulos-footer">About Us</p>
              <p className="subtitulos-footer">Blog</p>
              <p className="subtitulos-footer">Sitemap</p>
            </div>
            <div className="informacion-support">
              <span className="titulo-footer">Support</span>
              <p className="subtitulos-footer">Contact Us</p>
              <p className="subtitulos-footer">FAQ</p>
            </div>
            <div className="informacion-legal">
              <span className="titulo-footer">Legal</span>
              <p className="subtitulos-footer">Privacy Policy</p>
              <p className="subtitulos-footer">Terms Of Service</p>
              <p className="subtitulos-footer">Copywrite Policy</p>
            </div>
            <div className="informacion-trustpilot subtitulos-footer">
              <img
                className="trustpilot-img"
                src="src/resources/star.PNG"
                alt="trustpilot"
                width="20"
                height="20"
              />
              <img
                className="trustpilot-img"
                src="src/resources/star.PNG"
                alt="trustpilot"
                width="20"
                height="20"
              />
              <img
                className="trustpilot-img"
                src="src/resources/star.PNG"
                alt="trustpilot"
                width="20"
                height="20"
              />
              <img
                className="trustpilot-img"
                src="src/resources/star.PNG"
                alt="trustpilot"
                width="20"
                height="20"
              />
              <img
                className="trustpilot-img"
                src="src/resources/star.PNG"
                alt="trustpilot"
                width="20"
                height="20"
              />
              Trustpilot Reviews
            </div>
          </div>
          <div className="rights-footer">
            <span>© 2017 - 2020 Chicksgold.com- All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
