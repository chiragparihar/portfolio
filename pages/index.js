import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Head from "next/head";

const App = () =>{
  return(
    <>
    
    <Head>
      <title>Chirag parihar portfolio</title>
      <meta name='description' content={`My very own portfolio website, where I show off my skills and projects on front and backend, please use the contact form to get in touch with me`} ></meta>
    </Head>
    
    <main className ="text-gray-400 bg-gray-900 body-font">
      
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Contact /> 
    </main>
  </>
  )
}
export default App