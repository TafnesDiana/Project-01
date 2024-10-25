'use client'

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import Image from 'next/image';
import ButtonComponent from '../component/component/buttonComponent';
import FormularioTwo from '../component/formPage/formPageTwo';
import ContainerComponent from '../component/component/containerComponent';

const App = () => {
  const router = useRouter();

  const handleBackButtonClick = useCallback(() => {
    router.push('/pages/pageOne');
  }, [router]);

  const handleNextButtonClick = useCallback(() => {
    router.push('/pages/pageThree');
  }, [router]);

  const handleSkipButtonClick = useCallback(() => {
    router.push('/pages/pageThree');
  }, [router]);

  return (
    <div className="flex">
      <Image
        src="/imagens/two.svg"
        alt="Welcome"
        width={552.51}
        height={480.01}
        className="mt-[98px] ml-[87.49px] mr-[639.99] mb-[133.99px]"
      />
      <ContainerComponent className="max-w-2xl">
        <FormularioTwo />
        <ButtonComponent className="custom-button mr-6 mt-3 font-bold" onClick={handleBackButtonClick}>Back</ButtonComponent>
        <ButtonComponent className="custom-button font-bold" onClick={handleNextButtonClick}>Next</ButtonComponent>
        <ButtonComponent className="custom-buttons font-bold" onClick={handleSkipButtonClick}>Skip</ButtonComponent>
      </ContainerComponent>
    </div>
  );
};

export default App;