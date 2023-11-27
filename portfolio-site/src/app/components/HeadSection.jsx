"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeadSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 mt-6">
        <div className="col-span-7 place-self-center text-center sm:text-left ">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#2196F3] to-[#4918d1]">
              Hello, I'm
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Athos", 1000, "Programmer", 1000, "Student", 1000, "Trainee", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADb7be] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ipsa
            sint ullam voluptas ratione nostrum error provident veritatis
            delectus magni iste nobis dolorum, expedita saepe, alias iusto
            explicabo dolore? Provident.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#2196F3] to-[#550cb4] hover:bg-slate200 text-white">
              Sobre mim
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#2196F3] to-[#550cb4] hover:bg-slate-800  text-white mt-3">
              <span className="block bg-[#060708] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#0e0e0e] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative ml-10">
            <Image
              src="/images/icon.png"
              alt="icon image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadSection;
