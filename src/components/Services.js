import React from "react";
import Title from "./Title";
import { services } from "../data/links";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title className="section-title" text1="our" text2="services" />

      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, serviceTitle, serviceText } = service;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{serviceTitle}</h4>
                <p className="service-text">{serviceText}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
