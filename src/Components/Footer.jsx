import "../Styles/Footer.css";

const Footer = () => <footer className="footer">
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
    <div className="informacion-chicks mobile-non">
      <span className="titulo-footer">Chicks Gold</span>
      <p className="subtitulos-footer">Games</p>
      <p className="subtitulos-footer">About Us</p>
      <p className="subtitulos-footer">Blog</p>
      <p className="subtitulos-footer">Sitemap</p>
    </div>
    <div className="informacion-support mobile-non">
      <span className="titulo-footer">Support</span>
      <p className="subtitulos-footer">Contact Us</p>
      <p className="subtitulos-footer">FAQ</p>
    </div>
    <div className="informacion-legal mobile-non">
      <span className="titulo-footer">Legal</span>
      <p className="subtitulos-footer">Privacy Policy</p>
      <p className="subtitulos-footer">Terms Of Service</p>
      <p className="subtitulos-footer">Copywrite Policy</p>
    </div>
    <div className="informacion-trustpilot subtitulos-footer mobile-non">
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
</footer>;

export default Footer;