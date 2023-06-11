import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Politicas de seguridad - Mirin App"}> 
      <div className="row contactus ">
        <div className="col-md-4 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <p className="text-justify">Protección de datos personales: Compromiso con la privacidad y confidencialidad de los usuarios. Medidas de seguridad para proteger la información recopilada.</p>
          <p className="text-justify">Seguridad de la transmisión de datos: Utilización de protocolos seguros de transferencia de datos. Cifrado de la comunicación entre usuarios y el sitio web.</p>
          <p className="text-justify">Protección contra ataques cibernéticos: Medidas de seguridad para proteger el sitio web y los datos almacenados. Firewalls, sistemas de detección de intrusos y actualizaciones regulares de software.</p>
          <p className="text-justify">Política de contraseñas seguras: Fomento del uso de contraseñas fuertes y únicas. Prevención de contraseñas fáciles de adivinar y actualización periódica.</p>
          <p className="text-justify">Verificación de pagos seguros: Trabajo con proveedores de servicios de pago confiables. Uso de métodos de autenticación seguros y cifrado de datos.</p>
          <p className="text-justify">Actualización de software: Mantenimiento de sistemas y software actualizados. Mitigación de vulnerabilidades y riesgos.</p>
          <p>Política de acceso y privilegios: Limitación de acceso a datos y sistemas a personal autorizado. Monitoreo y auditoría para prevenir accesos no autorizados.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;