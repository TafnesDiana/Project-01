'use client'
import Image from 'next/image';
import FormularioTwo from '@/app/formPage/formPageTwo';
import ContainerComponent from '@/app/_component/container/containerComponent';

const App = () => {
  return (
    <div className="flex  h-[100vh]">
      <Image
        src="/imagens/two.svg"
        alt="Welcome"
        width={552.51}
        height={480.01}
        className="mt-[98px] ml-[87.49px] mr-[639.99] mb-[133.99px]"
      />
      <ContainerComponent className="max-w-2xl">
        <FormularioTwo/>
       </ContainerComponent>
    </div>
  );
};

export default App;