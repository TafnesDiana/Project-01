'use client'
import Image from 'next/image';
import TextComponent from '@/app/_component/text/textComponent';
import ContainerComponent from '@/app/_component/container/containerComponent';
import FormularioFour from '@/app/formPage/formPageFour';


const App = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-evenly h-[100vh] p-6 lg:p-0">
      <Image
        src="/imagens/four.svg"
        alt="Welcome"
        width={552.51}
        height={480.01}
        className="mt-8 lg:mt-[146px] lg:ml-[87.49px] lg:mr-[637] lg:mb-[133.99px] w-[80%] sm:w-[60%] lg:w-auto"
      />
      <ContainerComponent className="max-w-xl text-center lg:text-center mt-6 lg:mt-0">
        <TextComponent className="font-sans text-[26px] font-bold pb-3 text-justify tracking-tighter leading-tight">If you or someone close to you has already made a loss on the investment, write down the details</TextComponent>
        <FormularioFour />
      </ContainerComponent>
    </div>
  );
};

export default App;