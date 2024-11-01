'use client'
import TextComponent from "@/app/_component/text/textComponent";
import ButtonComponent from "@/app/_component/button/buttonComponent";
import ContainerComponent from "@/app/_component/container/containerComponent";
import Image from "next/image";
import Link from "next/link";

const App = () => {
    return (
      <div className="flex  h-[100vh]">
        <Image
          src="/imagens/one.svg"
          alt="Welcome"
          width={552.51}
          height={480.01}
          className="mt-[146px] ml-[87.49px] mr-[637] mb-[133.99px]"
        />
        <ContainerComponent className="max-w-xl">
          <h1 className="text-[39px] font-bold">Necessities of working in financial markets</h1>
          <TextComponent className="font-sans text-[29px] pb-12 leading-[32.81px]">This research is to find the reasons for the failure of people in financial markets. The results of this survey will be emailed to you along with the analysis of our experienced experts.</TextComponent>
          <Link href={'/'}><ButtonComponent className="custom-button mr-6 font-bold">Back to Home</ButtonComponent></Link>
          <Link href={'/pages/pageTwo'}><ButtonComponent className="custom-button w-9 font-bold">Fill out the form</ButtonComponent></Link>
          </ContainerComponent>
  
      </div>
    );
  };
  
  export default App;