import "../Styles/Body.css";
import "../Styles/CardContainer.css";
import "../Styles/Cards.css";

const Body = () => (
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
          <div className="search-price mobile-non">
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
          <div className="search-item mobile-non">
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
          <div className="search-item mobile-non">
            <div className="search-price-title">
              <div>
                <span className="slider"></span>
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
            {/* Primera tanda */}
            <div className=" flex-center">
              <div className="custom-card">
                <div className="custom-card-header">
                  <div className="custom-card-header-stock">
                    <span className="on-sale title-card-size">
                      <span className="dot"></span>ON SALE
                    </span>
                    <span className="in-stock title-card-size">In stock</span>
                  </div>
                  <div className="custom-card-header-input background-parameters">
                    <span>1</span>
                    <span className="sort"></span>
                  </div>
                </div>
                <div className="custom-card-body">
                  <img
                    src="src/resources/bleach1.png"
                    alt="primer objeto"
                    width="45"
                    height="45"
                  />
                  <div className="custom-card-body-title">
                    <span className="titulo">Blue Partyhat</span>
                    <img
                      src="src/resources/BleachIcon.PNG"
                      alt="bleach icon"
                      width="20"
                      height="20"
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
            <div className=" flex-center">
              <div className="custom-card">
                <div className="custom-card-header">
                  <div className="custom-card-header-stock">
                    <span className="on-sale title-card-size">
                      <span className="dot"></span>ON SALE
                    </span>
                    <span className="in-stock title-card-size">In stock</span>
                  </div>
                  <div className="custom-card-header-input background-parameters">
                    <span>1</span>
                    <span className="sort"></span>
                  </div>
                </div>
                <div className="custom-card-body">
                  <img
                    src="src/resources/bleach1.png"
                    alt="primer objeto"
                    width="45"
                    height="45"
                  />
                  <div className="custom-card-body-title">
                    <span className="titulo">Blue Partyhat</span>
                    <img
                      src="src/resources/BleachIcon.PNG"
                      alt="bleach icon"
                      width="20"
                      height="20"
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
            <div className=" flex-center">
              <div className="custom-card">
                <div className="custom-card-header">
                  <div className="custom-card-header-stock">
                    <span className="on-sale title-card-size">
                      <span className="dot"></span>ON SALE
                    </span>
                    <span className="in-stock title-card-size">In stock</span>
                  </div>
                  <div className="custom-card-header-input background-parameters">
                    <span>1</span>
                    <span className="sort"></span>
                  </div>
                </div>
                <div className="custom-card-body">
                  <img
                    src="src/resources/bleach1.png"
                    alt="primer objeto"
                    width="45"
                    height="45"
                  />
                  <div className="custom-card-body-title">
                    <span className="titulo">Blue Partyhat</span>
                    <img
                      src="src/resources/BleachIcon.PNG"
                      alt="bleach icon"
                      width="20"
                      height="20"
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
            {/* Segunda tanda */}
            <div className=" flex-center">
              <div className="custom-card">
                <div className="custom-card-header">
                  <div className="custom-card-header-stock">
                    <span className="on-sale title-card-size">
                      <span className="dot"></span>ON SALE
                    </span>
                    <span className="in-stock title-card-size">In stock</span>
                  </div>
                  <div className="custom-card-header-input background-parameters">
                    <span>1</span>
                    <span className="sort"></span>
                  </div>
                </div>
                <div className="custom-card-body">
                  <img
                    src="src/resources/gintama1.jpg"
                    alt="primer objeto"
                    width="45"
                    height="45"
                  />
                  <div className="custom-card-body-title">
                    <span className="titulo">Blue Partyhat</span>
                    <img
                      src="src/resources/gintama-icon.png"
                      alt="bleach icon"
                      width="20"
                      height="20"
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
            <div className=" flex-center">
              <div className="custom-card">
                <div className="custom-card-header">
                  <div className="custom-card-header-stock">
                    <span className="on-sale title-card-size">
                      <span className="dot"></span>ON SALE
                    </span>
                    <span className="in-stock title-card-size">In stock</span>
                  </div>
                  <div className="custom-card-header-input background-parameters">
                    <span>1</span>
                    <span className="sort"></span>
                  </div>
                </div>
                <div className="custom-card-body">
                  <img
                    src="src/resources/gintama1.jpg"
                    alt="primer objeto"
                    width="45"
                    height="45"
                  />
                  <div className="custom-card-body-title">
                    <span className="titulo">Blue Partyhat</span>
                    <img
                      src="src/resources/gintama-icon.png"
                      alt="bleach icon"
                      width="20"
                      height="20"
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
            <div className=" flex-center">
              <div className="custom-card">
                <div className="custom-card-header">
                  <div className="custom-card-header-stock">
                    <span className="on-sale title-card-size">
                      <span className="dot"></span>ON SALE
                    </span>
                    <span className="in-stock title-card-size">In stock</span>
                  </div>
                  <div className="custom-card-header-input background-parameters">
                    <span>1</span>
                    <span className="sort"></span>
                  </div>
                </div>
                <div className="custom-card-body">
                  <img
                    src="src/resources/gintama1.jpg"
                    alt="primer objeto"
                    width="45"
                    height="45"
                  />
                  <div className="custom-card-body-title">
                    <span className="titulo">Blue Partyhat</span>
                    <img
                      src="src/resources/gintama-icon.png"
                      alt="bleach icon"
                      width="20"
                      height="20"
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
            {/* Tercera tanda */}
            <div className=" flex-center">
              <div className="custom-card">
                <div className="custom-card-header">
                  <div className="custom-card-header-stock">
                    <span className="on-sale title-card-size">
                      <span className="dot"></span>ON SALE
                    </span>
                    <span className="in-stock title-card-size">In stock</span>
                  </div>
                  <div className="custom-card-header-input background-parameters">
                    <span>1</span>
                    <span className="sort"></span>
                  </div>
                </div>
                <div className="custom-card-body">
                  <img
                    src="src/resources/fullmetal.jpg"
                    alt="primer objeto"
                    width="45"
                    height="45"
                  />
                  <div className="custom-card-body-title">
                    <span className="titulo">Blue Partyhat</span>
                    <img
                      src="src/resources/fullmetalicon.png"
                      alt="bleach icon"
                      width="20"
                      height="20"
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
            <div className=" flex-center">
              <div className="custom-card">
                <div className="custom-card-header">
                  <div className="custom-card-header-stock">
                    <span className="on-sale title-card-size">
                      <span className="dot"></span>ON SALE
                    </span>
                    <span className="in-stock title-card-size">In stock</span>
                  </div>
                  <div className="custom-card-header-input background-parameters">
                    <span>1</span>
                    <span className="sort"></span>
                  </div>
                </div>
                <div className="custom-card-body">
                  <img
                    src="src/resources/fullmetal.jpg"
                    alt="primer objeto"
                    width="45"
                    height="45"
                  />
                  <div className="custom-card-body-title">
                    <span className="titulo">Blue Partyhat</span>
                    <img
                      src="src/resources/fullmetalicon.png"
                      alt="bleach icon"
                      width="20"
                      height="20"
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
            <div className=" flex-center">
              <div className="custom-card">
                <div className="custom-card-header">
                  <div className="custom-card-header-stock">
                    <span className="on-sale title-card-size opacity-non">
                      <span className="dot"></span>ON SALE
                    </span>
                    <span className="in-stock title-card-size">In stock</span>
                  </div>
                  <div className="custom-card-header-input background-parameters">
                    <span>1</span>
                    <span className="sort"></span>
                  </div>
                </div>
                <div className="custom-card-body">
                  <img
                    src="src/resources/fullmetal.jpg"
                    alt="primer objeto"
                    width="45"
                    height="45"
                  />
                  <div className="custom-card-body-title">
                    <span className="titulo">Blue Partyhat</span>
                    <img
                      src="src/resources/fullmetalicon.png"
                      alt="bleach icon"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div className="precio opacity-non">
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
            {/* Cuarta tanda */}
            <div className=" flex-center">
              <div className="custom-card">
                <div className="custom-card-header">
                  <div className="custom-card-header-stock">
                    <span className="on-sale title-card-size opacity-non">
                      <span className="dot"></span>ON SALE
                    </span>
                    <span className="in-stock title-card-size">In stock</span>
                  </div>
                  <div className="custom-card-header-input background-parameters">
                    <span>1</span>
                    <span className="sort"></span>
                  </div>
                </div>
                <div className="custom-card-body">
                  <img
                    src="src/resources/death-note.png"
                    alt="primer objeto"
                    width="45"
                    height="45"
                  />
                  <div className="custom-card-body-title">
                    <span className="titulo">Blue Partyhat</span>
                    <img
                      src="src/resources/death-note-icon.png"
                      alt="bleach icon"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div className="precio opacity-non">
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
            <div className=" flex-center">
              <div className="custom-card">
                <div className="custom-card-header">
                  <div className="custom-card-header-stock">
                    <span className="on-sale title-card-size opacity-non">
                      <span className="dot"></span>ON SALE
                    </span>
                    <span className="in-stock title-card-size">In stock</span>
                  </div>
                  <div className="custom-card-header-input background-parameters">
                    <span>1</span>
                    <span className="sort"></span>
                  </div>
                </div>
                <div className="custom-card-body">
                  <img
                    src="src/resources/death-note.png"
                    alt="primer objeto"
                    width="45"
                    height="45"
                  />
                  <div className="custom-card-body-title">
                    <span className="titulo">Blue Partyhat</span>
                    <img
                      src="src/resources/death-note-icon.png"
                      alt="bleach icon"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div className="precio opacity-non">
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
            <div className=" flex-center">
              <div className="custom-card">
                <div className="custom-card-header">
                  <div className="custom-card-header-stock">
                    <span className="on-sale title-card-size opacity-non">
                      <span className="dot"></span>ON SALE
                    </span>
                    <span className="in-stock title-card-size">In stock</span>
                  </div>
                  <div className="custom-card-header-input background-parameters">
                    <span>1</span>
                    <span className="sort"></span>
                  </div>
                </div>
                <div className="custom-card-body">
                  <img
                    src="src/resources/death-note.png"
                    alt="primer objeto"
                    width="45"
                    height="45"
                  />
                  <div className="custom-card-body-title">
                    <span className="titulo">Blue Partyhat</span>
                    <img
                      src="src/resources/death-note-icon.png"
                      alt="bleach icon"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div className="precio opacity-non">
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
            {/* Quinta tanda */}
            <div className=" flex-center">
              <div className="custom-card">
                <div className="custom-card-header">
                  <div className="custom-card-header-stock">
                    <span className="on-sale title-card-size opacity-non">
                      <span className="dot"></span>ON SALE
                    </span>
                    <span className="in-stock title-card-size">In stock</span>
                  </div>
                  <div className="custom-card-header-input background-parameters">
                    <span>1</span>
                    <span className="sort"></span>
                  </div>
                </div>
                <div className="custom-card-body">
                  <img
                    src="src/resources/danmachi.png"
                    alt="primer objeto"
                    width="45"
                    height="45"
                  />
                  <div className="custom-card-body-title">
                    <span className="titulo">Blue Partyhat</span>
                    <img
                      src="src/resources/danmachi-icon.png"
                      alt="bleach icon"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div className="precio opacity-non">
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
            <div className=" flex-center">
              <div className="custom-card">
                <div className="custom-card-header">
                  <div className="custom-card-header-stock">
                    <span className="on-sale title-card-size opacity-non">
                      <span className="dot"></span>ON SALE
                    </span>
                    <span className="in-stock title-card-size">In stock</span>
                  </div>
                  <div className="custom-card-header-input background-parameters">
                    <span>1</span>
                    <span className="sort"></span>
                  </div>
                </div>
                <div className="custom-card-body">
                  <img
                    src="src/resources/danmachi.png"
                    alt="primer objeto"
                    width="45"
                    height="45"
                  />
                  <div className="custom-card-body-title">
                    <span className="titulo">Blue Partyhat</span>
                    <img
                      src="src/resources/danmachi-icon.png"
                      alt="bleach icon"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div className="precio opacity-non">
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
            <div className=" flex-center">
              <div className="custom-card">
                <div className="custom-card-header">
                  <div className="custom-card-header-stock">
                    <span className="on-sale title-card-size opacity-non">
                      <span className="dot"></span>ON SALE
                    </span>
                    <span className="in-stock title-card-size">In stock</span>
                  </div>
                  <div className="custom-card-header-input background-parameters">
                    <span>1</span>
                    <span className="sort"></span>
                  </div>
                </div>
                <div className="custom-card-body">
                  <img
                    src="src/resources/danmachi.png"
                    alt="primer objeto"
                    width="45"
                    height="45"
                  />
                  <div className="custom-card-body-title">
                    <span className="titulo">Blue Partyhat</span>
                    <img
                      src="src/resources/danmachi-icon.png"
                      alt="bleach icon"
                      width="20"
                      height="20"
                    />
                  </div>
                  <div className="precio opacity-non">
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
          <button className="button-move button-transparent">
            <span className="caret-left"></span>
          </button>
          <button className="button-active">1</button>
          <button className="button-transparent mobile-non">2</button>
          <button className="button-transparent mobile-non">3</button>
          <button className="button-transparent mobile-non">4</button>
          <button className="button-transparent">...</button>
          <button className="button-transparent">11</button>
          <button className="button-move button-transparent">
            <span className="caret-right"></span>
          </button>
        </div>
      </div>
    </div>
  </body>
);

export default Body;
