'use client'

import React, { useCallback } from "react";
import TextComponente from "../component/component/textComponent";
import ButtonComponent from "../component/component/buttonComponent";
import ContainerComponent from "../component/component/containerComponent";
import Image from "next/image";
import { useRouter } from "next/navigation";

const App = () => {
  const router = useRouter();

  const handleBackButtonClick = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleNextButtonClick = useCallback(() => {
    router.push('/pages/pageTwo');
  }, [router]);

    return (
      <div className="flex">
        <Image
          src="/imagens/one.svg"
          alt="Welcome"
          width={552.51}
          height={480.01}
          className="mt-[146px] ml-[87.49px] mr-[637] mb-[133.99px]"
        />
        <ContainerComponent className="max-w-xl">
          <h1 className="text-[39px] font-bold">Necessities of working in financial markets</h1>
          <TextComponente className="font-sans text-[29px] pb-12 leading-[32.81px]">This research is to find the reasons for the failure of people in financial markets. The results of this survey will be emailed to you along with the analysis of our experienced experts.</TextComponente>
          <ButtonComponent className="custom-button mr-6 font-bold" onClick={handleBackButtonClick}>Back to Home</ButtonComponent>
          <ButtonComponent className="custom-button w-9 font-bold"onClick={handleNextButtonClick}>Fill out the form</ButtonComponent>
        </ContainerComponent>
  
      </div>
    );
  };
  
  export default App;