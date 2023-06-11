import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"Acerca de - Mirin App"}>
      <div className="row contactus ">
        <div className="col-md-4 ">
          <img
            src="/images/about.png"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
            <p className="text-justify mt-2">
              En Mirin, nos apasiona la moda Old Money y nos dedicamos a ofrecerte prendas y accesorios inspirados en el estilo elegante y refinado de épocas pasadas. Con nuestra versión 1.0.0, hemos creado un destino en línea donde los amantes del estilo clásico pueden encontrar piezas que capturan la esencia del lujo atemporal.
          </p>
          <p className="text-justify mt-2">
              Nuestra misión es revivir el encanto y la sofisticación de la moda Old Money, y lo hacemos a través de una cuidadosa selección de prendas y accesorios de alta calidad. Nos esforzamos por brindarte una experiencia de compra en línea excepcional, donde la elegancia y el estilo se unen para crear un ambiente único.
            </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;