import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">All Right Reserved&copy;Adez</h1>
      <p className="text-center mt-3">
        <Link to="/about">Acerca de</Link>|<Link to="/contact">Contacto</Link>|
        <Link to="/policy">Politicas de seguridad</Link>
      </p>
    </div>
  );
};

export default Footer;