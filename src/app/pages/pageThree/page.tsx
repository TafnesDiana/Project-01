'use client'

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import Image from 'next/image';
import ButtonComponent from '../component/component/buttonComponent';
import ContainerComponent from '../component/component/containerComponent';
import FormularioSelectThree from '../component/formPage/formPageThree';


const App = () => {
  const router = useRouter();

  const handleBackButtonClick = useCallback(() => {
    router.push('/pages/pageTwo'); 
  }, [router]);

  const handleNextButtonClick = useCallback(() => {
    router.push('/pages/pageFour'); 
  }, [router]);

  const handleSkipButtonClick = useCallback(() => {
    router.push('/pages/pageFour'); 
  }, [router]);

  return (
    <div className="flex">
      <Image
        src="/imagens/three.svg"
        alt="Welcome"
        width={552.51}
        height={480.01}
        className="mt-[98px] ml-[87.49px] mr-[639.99] mb-[133.99px]"
      />
      <ContainerComponent className="max-w-2xl">
        <FormularioSelectThree/>
        <ButtonComponent className="custom-button mr-6 mt-3 font-bold" onClick={handleBackButtonClick}>Back</ButtonComponent>
        <ButtonComponent className="custom-button font-bold" onClick={handleNextButtonClick}>Next</ButtonComponent>
        <ButtonComponent className="custom-buttons font-bold" onClick={handleSkipButtonClick}>Skip</ButtonComponent>
      </ContainerComponent>
    </div>
  );
};

export default App;
