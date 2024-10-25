'use client'

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import Image from 'next/image';
import TextComponent from '../component/component/textComponent';
import ButtonComponent from '../component/component/buttonComponent';
import ContainerComponent from '../component/component/containerComponent';
import FormularioText from '../component/formPage/formPageFour';
import FormularioTextarea from '../component/formPage/formPageFour';


const App = () => {
  const router = useRouter();

  const handleBackButtonClick = useCallback(() => {
    router.push('/pages/pageThree'); 
  }, [router]);

  const handleNextButtonClick = useCallback(() => {
    router.push('/pages/pageFive'); 
  }, [router]);

  const handleSkipButtonClick = useCallback(() => {
    router.push('/pages/pageFive'); 
  }, [router]);

  return (
    <div className="flex">
      <Image
        src="/imagens/four.svg"
        alt="Welcome"
        width={552.51}
        height={480.01}
        className="mt-[98px] ml-[87.49px] mr-[639.99] mb-[133.99px]"
      />
      <ContainerComponent className="max-w-xl">
        <TextComponent className="font-sans text-[26px] font-bold pb-3 text-justify tracking-tighter leading-tight">If you or someone close to you has already made a loss on the investment, write down the details</TextComponent>
        <FormularioTextarea/>
        <ButtonComponent className="custom-button mr-6 mt-3 font-bold" onClick={handleBackButtonClick}>Back</ButtonComponent>
        <ButtonComponent className="custom-button font-bold" onClick={handleNextButtonClick}>Next</ButtonComponent>
        <ButtonComponent className="custom-buttons font-bold" onClick={handleSkipButtonClick}>Skip</ButtonComponent>
      </ContainerComponent>
    </div>
  );
};

export default App;