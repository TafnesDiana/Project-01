'use client'
import Image from 'next/image';
import TextComponent from '@/app/_component/text/textComponent';
import ContainerComponent from '@/app/_component/container/containerComponent';
import FormularioFour from '@/app/formPage/formPageFour';


const App = () => {
  return (
    <div className="flex  h-[100vh]">
      <Image
        src="/imagens/four.svg"
        alt="Welcome"
        width={552.51}
        height={480.01}
        className="mt-[98px] ml-[87.49px] mr-[639.99] mb-[133.99px]"
      />
      <ContainerComponent className="max-w-xl">
        <TextComponent className="font-sans text-[26px] font-bold pb-3 text-justify tracking-tighter leading-tight">If you or someone close to you has already made a loss on the investment, write down the details</TextComponent>
        <FormularioFour />
      </ContainerComponent>
    </div>
  );
};

export default App;