'use client'
import Image from "next/image";
import TextComponent from "./pages/component/component/textComponent";
import ButtonComponent from "./pages/component/component/buttonComponent";
import ContainerComponent from "./pages/component/component/containerComponent";
import { useState } from "react";
import { useRouter } from "next/navigation";


const App = () => {

  const [buttonText, setButtonText] = useState("Let´s Go");

  const handleMouseOver = () => {
    setButtonText("Just Go Ahead");
  };

  const handleMouseOut = () => {
    setButtonText("Let´s Go");
  };

  const router = useRouter();
  
  const handleButtonclick = () =>{
    router.push('/pages/pageOne');
  }


  return (
    <div className="flex sm:flex-col lg:flex-row justify-evenly">
      <Image
        src="imagens/zero.svg"
        alt="Welcome"
        width={431}
        height={661}
      />

      <ContainerComponent className="font-bold">
        <h1 className="text-[111px]">welcome</h1>
        <TextComponent className="text-[29px] pb-20">Tanks for participating in the poll</TextComponent>
        <ButtonComponent className="custom-button" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleButtonclick}>{buttonText}</ButtonComponent>
      </ContainerComponent>

    </div>
  );
}

export default App;
