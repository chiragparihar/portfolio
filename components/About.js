
import React from "react";
import { TextLoop } from "react-text-loop-next";
export default function About() {
  const str = "I love to build amazing "
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Chirag.
            <br className="hidden lg:inline-block" />{str} 
                <TextLoop>
                    <span> Web Apps.</span>
                    <span> Websites</span>
                </TextLoop>
          </h1>
          <p className="mb-8 leading-relaxed">
          Currently, I am a 3rd-year computer science student at Carleton University. I am deeply passionate about web development and like to create Cool websites using React and NodeJS. The MERN stack is my go-to stack for building websites. I do, however, try to experiment with different stacks and am constantly adding new tools to my arsenal.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}