import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "./../components/Layout/Layout";
import "./../styles/AuthStyles.css";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"Todas las categorias"}>
      <div className="container">
        <div className="row">
          {categories.map((c) => (
            <div className="col-md-6 mt-5 mb-3" key={c._id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{c.name}</h5>
                  <Link to={`/category/${c.slug}`} className="btn btn-primary">
                    Ver categoría
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
