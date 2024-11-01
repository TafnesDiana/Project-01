'use client'
import Image from "next/image";
import TextComponent from "./_component/text/textComponent";
import ButtonComponent from "./_component/button/buttonComponent";
import ContainerComponent from "./_component/container/containerComponent";
import { useState } from "react";
import Link from "next/link";


const App = () => {

  const [buttonText, setButtonText] = useState("Let´s Go");

  const handleMouseOver = () => {
    setButtonText("Just Go Ahead");
  };

  const handleMouseOut = () => {
    setButtonText("Let´s Go");
  };

  return (
    <div className="flex sm:flex-col lg:flex-row justify-evenly  h-[100vh]">
      <Image
        src="imagens/zero.svg"
        alt="Welcome"
        width={431}
        height={661}
      />

      <ContainerComponent className="font-bold">
        <h1 className="text-[111px]">welcome</h1>
        <TextComponent className="text-[29px] pb-20">Tanks for participating in the poll</TextComponent>
        <Link href={'/pages/pageOne'}><ButtonComponent className="custom-button" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>{buttonText}</ButtonComponent></Link>
      </ContainerComponent>

    </div>
  );
}

export default App;
