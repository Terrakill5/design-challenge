import "../Styles/Header.css";

const Header = () => <header className="header">
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
</header>;

export default Header;