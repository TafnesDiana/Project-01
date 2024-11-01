'use client'
import Image from 'next/image';
import ContainerComponent from '@/app/_component/container/containerComponent';
import FormularioThree from '@/app/formPage/formPageThree';



const App = () => {
  return (
    <div className="flex  h-[100vh]">
      <Image
        src="/imagens/three.svg"
        alt="Welcome"
        width={552.51}
        height={480.01}
        className="mt-[98px] ml-[87.49px] mr-[639.99] mb-[133.99px]"
      />
      <ContainerComponent className="max-w-2xl">
        <FormularioThree/>
      </ContainerComponent>
    </div>
  );
};

export default App;
