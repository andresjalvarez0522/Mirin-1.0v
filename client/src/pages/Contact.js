import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contactenos - MirinApp"}>
      <div className="row contactus ">
        <div className="col-md-4 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACTENOS</h1>
          <p className="text-justify mt-2">
          Cualquier consulta e información sobre el producto no dude en comunicarte en cualquier momento disponible las 24 horas, los 7 días de la semana
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@mirinapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +57-300-7161-113
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (llamadas gratuitas)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;