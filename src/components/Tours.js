import React from "react";
import Title from "./Title";
import { tours } from "../data/links";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title className="section-title" text1="featured" text2="tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const {
            id,
            img,
            toursDate,
            toursTitle,
            toursText,
            toursCountry,
            toursDuration,
            toursPrice,
          } = tour;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{toursDate}</p>
              </div>
              <div className="tour-info">
                <h4>{toursTitle}</h4>
                <p>
                  {toursText} Test - {id}
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {toursCountry}
                  </p>
                  <p>{toursDuration} days</p>
                  <p>${toursPrice}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
