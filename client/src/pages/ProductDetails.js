import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./../styles/ProductDetailsSyles.css";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row container mt-2">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top w-75 p-3"
            alt={product.name}
          />
        </div>
        <div className="col-md-6 ">
          <h1 className="text-center">Detalles de producto</h1>
          <h6>Nombre: {product.name}</h6>
          <h6>Descripcion: {product.description}</h6>
          <h6>Precio: {product.price}</h6>
          <h6>Categoría: {product.category && product.category.name}</h6>
          <button class="btn btn-secondary ms-1">Añadir Carrito</button>
        </div>
      </div>
      <div className="row">
        <h6>Productos Similares</h6>
        {relatedProducts.length < 1 && (
          <p className="text-center">No se encontraron productos similares</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts &&
            relatedProducts.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text">$ {p.price}</p>

                  <button class="btn btn-secondary ms-1">Añadir Carrito</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
