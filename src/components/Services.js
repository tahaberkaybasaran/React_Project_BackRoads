import React from "react";
import Title from "./Title";
import { services } from "../data/links";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title className="section-title" text1="our" text2="services" />

      <div className="section-center services-center">
        {services.map((service) => {
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
