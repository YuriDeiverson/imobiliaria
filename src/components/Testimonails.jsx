import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react";

const Testimonails = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonails"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Clientes{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testemunhas
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Histórias de quem realizou os sonhos com nossas casas
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 max-w-[340px] border border-gray-300 shadow-lg rounded px-8 py-12 text-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 text-sm mb-4">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <img
                  src={assets.star_icon}
                  key={index}
                  alt="Estrela de avaliação"
                  className="w-4 h-4"
                />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonails;
