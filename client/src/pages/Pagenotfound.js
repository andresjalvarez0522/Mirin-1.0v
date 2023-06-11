import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  return (
    <Layout title={"Volver - Esta página no funciona"}>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops ! la pagina no funciona</h2>
        <Link to="/" className="pnf-btn">
          Volver
        </Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;