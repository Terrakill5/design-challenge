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

  <div className="mobile-non ">
    <span className="dropdown tablet-non">
      CURRENCY <span className="icon chevron-down"></span>
    </span>
    <span className="dropdown tablet-non">
      ITEMS <span className="icon chevron-down"></span>
    </span>
    <span className="dropdown tablet-non">
      ACCOUNTS <span className="icon chevron-down"></span>
    </span>
    <span className="dropdown tablet-non">
      SERVICES <span className="icon chevron-down"></span>
    </span>
    <span className="dropdown tablet-non">
      SWAP <span className="icon chevron-down"></span>
    </span>
    <span className="dropdown tablet-non">
      SELL <span className="icon chevron-down"></span>
    </span>
    <div className="tablet menu-header">
    <span className="menu"></span>

  </div>
  </div>
 
</div>
<div className="sign-in-header mobile-non">
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
<div className="mobile menu-header">
    <span className="menu"></span>

  </div>
</header>;

export default Header;