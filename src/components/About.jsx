import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        {" "}
        História{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Nossa Marca{" "}
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Paixão arquietônica, Dedicação ao cliente
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Anos de Experiência</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Projetos Realizados</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">15+</p>
              <p>Clientes Realizados</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Projetos em andamento</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            {" "}
            Nossa empresa tem uma vasta experiencia no mercado imobiliario, com
            mais de 20 anos de experiencia, e mais de 25 projetos realizados.
            Com uma equipe de profissionais qualificados e experientes, estamos
            prontos para ajudar voce a encontrar a casa perfeita para voce.
          </p>
          <button className="bg-blue-600 text-white px-8 py- rounded cursor-pointer">
            Saiba mais
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
