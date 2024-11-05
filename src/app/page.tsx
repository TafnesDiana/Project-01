'use client'
import TextComponent from "@/app/_component/text/textComponent";
import ButtonComponent from "@/app/_component/button/buttonComponent";
import ContainerComponent from "@/app/_component/container/containerComponent";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const App = () => {

  const [buttonText, setButtonText] = useState("Let´s Go");

  const handleMouseOver = () => {
    setButtonText("Just Go Ahead");
  };

  const handleMouseOut = () => {
    setButtonText("Let´s Go");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-evenly h-[100vh] p-6 lg:p-0">
      <Image
        src="/imagens/zero.svg"
        alt="Welcome"
        width={552.51}
        height={480.01}
        className="mt-8 lg:mt-[146px] lg:ml-[87.49px] lg:mr-[637] lg:mb-[133.99px] w-[80%] sm:w-[60%] lg:w-auto"
      />

      <ContainerComponent className=" font-bold max-w-xl text-center lg:text-center mt-6 lg:mt-0">
        <h1 className="text-[80px] lg:text-[111px] font-bold">welcome</h1>
        <TextComponent className="font-sans text-[20px] lg:text-[29px] pb-8 lg:pb-12 leading-[28px] lg:leading-[32.81px]">
        Tanks for participating in the poll
        </TextComponent>
        <Link href={'/pages/pageOne'}><ButtonComponent className="custom-button" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{buttonText}</ButtonComponent></Link>
      </ContainerComponent>
    </div>
  );
};

export default App;