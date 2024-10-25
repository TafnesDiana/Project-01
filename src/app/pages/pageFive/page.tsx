'use client'

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import Image from 'next/image';
import ButtonComponent from '../component/component/buttonComponent';
import ContainerComponent from '../component/component/containerComponent';
import FormularioText from '../component/formPage/formPageFive';


const App = () => {
    const router = useRouter();

    const handleBackButtonClick = useCallback(() => {
        router.push('/pages/pageFour');
    }, [router]);

    const handleSubmitButtonClick = useCallback(() => {
        router.push('/pages/pageArmazenamento');
    }, [router]);


    return (
        <div className="flex">
            <Image
                src="/imagens/five.svg"
                alt="Welcome"
                width={552.51}
                height={480.01}
                className="mt-[98px] ml-[87.49px] mr-[639.99] mb-[133.99px]"
            />
            <ContainerComponent className="max-w-xl">
                <FormularioText />
                <div className='flex flex-col'>
                    <ButtonComponent className="custom-buttons mr-6 mt-3  font-bold" onClick={handleBackButtonClick}>Back</ButtonComponent>
                    <ButtonComponent className="custom-buttons mt-3 font-bold" onClick={handleSubmitButtonClick}>Submit</ButtonComponent>
                </div>
            </ContainerComponent>
        </div>
    );
};

export default App;